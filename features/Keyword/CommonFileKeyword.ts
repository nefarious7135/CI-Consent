import * as xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';

export const XLSXFile = {
  /**
   * Reads and parses an XLSX file from disk and returns data from the specified sheet.
   * @param filePath - Relative path to the XLSX file.
   * @param sheetName - Name of the sheet to parse.
   * @returns Parsed sheet data as an array of objects.
   */
  readAndParseXLSX: (filePath: string, sheetName: string) => {
    const fullPath = path.resolve(process.cwd(), filePath);
    const fileContent = fs.readFileSync(fullPath, 'binary');

    const workbook = xlsx.read(fileContent, { type: 'binary' });

    if (!workbook.SheetNames.includes(sheetName)) {
      throw new Error(`Invalid sheet name: ${sheetName}. Available sheets: ${workbook.SheetNames.join(', ')}`);
    }

    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], {
      raw: false,
    });

    const formattedData = sheetData.map((row: any) => {
      if (row.Contract_date && typeof row.Contract_date === 'number') {
        row.Contract_date = excelSerialToDate(row.Contract_date);
      }
      return row;
    });

    return formattedData;
  }
};


export const excelSerialToDate = (serial: number): string => {
  /**
 * Converts Excel date serial to DD/MM/YYYY
 */
  const utcDays = Math.floor(serial - 25569);
  const date = new Date(utcDays * 86400000);
  return date.toLocaleDateString('en-GB');
};


export const JSONFile = {

  readAndParseJson: (filePath: string): any => {
    /**
     * Reads a JSON file from disk and returns its content.
     * @param filePath - Relative path to the JSON file.  
     * @returns Parsed JSON content as an object.
     */


    if (!filePath) {
      throw new Error('File path is required to read JSON data.');
    }

    const fullPath = path.resolve(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`JSON file not found: ${fullPath}`);
    }

    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(fileContent);
  },


  /**
   * Writes an object to a JSON file with formatting.
   * @param filePath - Relative path to write the JSON file.
   * @param data - The object to be stringified and written.
   */

  writeJsonToFile: async (filePath: string, data: object): Promise<void> => {
    if (!filePath) {
      throw new Error('File path is required to write JSON data.');
    }

    const fullPath = path.resolve(process.cwd(), filePath);
    const dir = path.dirname(fullPath);

    // ✅ สร้างโฟลเดอร์หากยังไม่มี
    await fs.mkdirSync(dir, { recursive: true });

    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFileSync(fullPath, jsonString, 'utf-8');
  },

  updateJsonFile: async (filePath: string, newData: Record<string, any>): Promise<void> => {
    const fullPath = path.resolve(process.cwd(), filePath);

    let existingData: Record<string, any> = {};
    if (fs.existsSync(fullPath)) {
      const fileContent = fs.readFileSync(fullPath, 'utf-8').trim();
      if (fileContent) {
        existingData = JSON.parse(fileContent);
      }
    }

    // 🔁 ใช้ deep merge เพื่อให้ข้อมูลเก่าใน nested object (เช่น app) ไม่หาย
    const merged = deepMerge(existingData, newData);

    // เขียนกลับ (pretty 2 ช่อง)
    fs.writeFileSync(fullPath, JSON.stringify(merged, null, 2), 'utf-8');
  },

  updateJsonFileLogComplate: async (filePath: string, newData: Record<string, any>): Promise<void> => {
    const fullPath = path.resolve(process.cwd(), filePath);

    let existingData: Record<string, any> = {};

    if (fs.existsSync(fullPath)) {
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      existingData = JSON.parse(fileContent);
    }

    const merged = deepMerge(existingData, newData);

    fs.writeFileSync(fullPath, JSON.stringify(merged, null, 2), 'utf-8');

    // ✍️ เพิ่ม log
    const logPath = path.resolve(process.cwd(), 'LocalStorage/complate.log');
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} | ${JSON.stringify(newData)}\n`;

    fs.appendFileSync(logPath, logEntry, 'utf-8');
  }
};


function isPlainObject(v: any): v is Record<string, any> {
  return v !== null && typeof v === 'object' && !Array.isArray(v);
}

// deep merge (ไม่เขียนทับถ้าเป็น object ซ้อนกัน จะรวม key ให้)
function deepMerge<T extends Record<string, any>, U extends Record<string, any>>(target: T, source: U): T & U {
  const out: any = { ...target };
  for (const [key, val] of Object.entries(source)) {
    if (val === undefined) {
      // ข้ามค่าที่เป็น undefined เพื่อไม่ให้ไปลบของเดิมโดยไม่ตั้งใจ
      continue;
    }
    if (isPlainObject(val) && isPlainObject(out[key])) {
      out[key] = deepMerge(out[key], val);
    } else {
      // ค่าเป็น primitive / array / object ที่ไม่ใช่ plain -> เขียนทับปกติ
      out[key] = Array.isArray(val) ? [...val] : val;
    }
  }
  return out;
}