import { expect, Locator, Page } from '@playwright/test';
import { locator } from '../Locator/PageLocator.js';
import { JSONFile } from './CommonFileKeyword.js';
import { faker as fakerTH } from '@faker-js/faker/locale/th';
import { faker as fakerEN } from '@faker-js/faker/locale/en';


export const UI = {

  // ************************************************* Login ZONE **********************************************************
  
  login: async (page: Page, username: string, password: string) => {
    await page.locator(locator.username).fill(username);
    await page.locator(locator.password).fill(password);
    await page.locator(locator.btnlogin).click();
    await page.waitForTimeout(2000);
  },

  // login จาก env key
  loginWithEnv: async (page: Page, userKey: string, passKey: string) => {
    const username = process.env[userKey]!;
    const password = process.env[passKey]!;
    console.log(`User ENV: ${username}`);
    console.log(`Password ENV: ${password}`);
    console.log('-------------------------');

    await UI.login(page, username, password);
  },

  // Wrapper login แต่ละ role
  login_Admin: async (page: Page) => UI.loginWithEnv(page, "LMS_userADMIN", "LMS_pwd"),
  login_PI: async (page: Page) => UI.loginWithEnv(page, "LMS_userPI", "LMS_pwd"),
  login_Callcenter: async (page: Page) => UI.loginWithEnv(page, "LMS_userCALL", "LMS_pwd"),
  login_DPO: async (page: Page) => UI.loginWithEnv(page, "LMS_userDPO", "LMS_pwd"),


};

export const optional = {
  containsOptionClick: async (page: Page,
    selector: string,
    selectorOption: string,
    selectorIndex = 0) => {
    const elementsCount = await page.locator(selector).count();
    if (elementsCount > selectorIndex) {
      await expect(page.locator(selector).nth(selectorIndex)).toBeVisible();
      await page.locator(selector).nth(selectorIndex).getByText(selectorOption).click();
    } else {
      console.log(`skip "${selector}" on task`);
    }
  },


  DialogContainsClick: async (page: Page, containsText: string, textClick: string) => {
    const dialog = page.locator('div[role="dialog"]');
    await expect(dialog).toContainText(containsText);
    await dialog.getByRole('button', { name: textClick }).click();
  },


  check: async (page: Page, selector: string, selectorIndex: number) => {
    const elements = page.locator(selector);
    const count = await elements.count();

    if (count > selectorIndex) {
      await elements.nth(selectorIndex).check({ force: true });
    } else {
      console.log(`skip "${selector}" on task`);
    }
  },

  checkbox: async (page: Page, selector: string, selectorIndex: number = 0) => {
    const elements = await page.$$(selector);
    if (elements.length > selectorIndex) {
      await elements[selectorIndex].check();
    } else {
      console.log(`🔚 skip ${selector}" on task`);
    }
  },

  attachFile: async (page: Page,
    selector: string,
    pathFile: string,
    selectorIndex: number = 0
  ) => {
    const elements = await page.locator(selector).elementHandles();

    if (elements.length > selectorIndex) {
      await page.locator(selector).nth(selectorIndex).setInputFiles(pathFile);
    } else {
      console.log(`🔚 skip ${selector}" at index "${selectorIndex}" on task`);
    }
  },

  click: async (page: Page, selector: string, selectorIndex: number = 0) => {
    const elements = page.locator(selector);
    const count = await elements.count();

    if (count > selectorIndex) {
      await elements.nth(selectorIndex).click();
    } else {
      console.log(`🔚 skip ${selector}" on task`);
    }
  },

  typeText: async (page: Page, selector: string, text: string, selectorIndex: number = 0) => {
    const elements = page.locator(selector);
    const count = await elements.count();

    if (count > selectorIndex) {
      await elements.nth(selectorIndex).fill(text);
    } else {
      console.log(`🔚 skip ${selector}" on task`);
    }
  },

  containsClick: async (page: Page, text: string, selectorIndex = 0) => {
    const elements = page.getByText(text, { exact: false });
    const count = await elements.count();

    if (text.trim() === "") {
      console.log(`🔚 skip ${text}" on task เพราะเป็นค่าว่าง`);
      return;
    }

    if (count > selectorIndex) {
      const target = elements.nth(selectorIndex);

      const isVisible = await target.isVisible();
      const isDisabled = await target.isDisabled();

      if (isVisible && !isDisabled) {
        await target.click({ force: true });
      } else {
        console.log(`🔚 skip ${text}" on task`);
      }
    } else {
      console.log(`🔚 skip ${text}" on task`);
    }
  }
};

export const fillform = {
  checkbox: async (page: Page, checkboxId: string) => {
    await page.locator(`[id="consents.${checkboxId}.checked"]`).check();
  },


  radio: async (page: Page, radioName: string) => {
    await page.locator(`input[name="consents.${radioName}.flag"][value="accept"]`).check();
  },
};


export const ProductsCode = {

  ProductsCodeCheck: (products_code: string) => {

    switch (products_code) {
      case '1010010000000':
        console.log('✅ 1010010000000 - สินเชื่อโอนเล่มทะเบียน สำหรับรถปลอดภาระ');
        return 'c2c-generic';

      case '1010030000000':
        console.log('✅ 1010030000000 - สินเชื่อโอนเล่มทะเบียน สำหรับรถยังไม่ปลอดภาระ กรณีติดภาระกับสถาบันการเงิน/ลีสซิ่งอื่น');
        return 'c2c-bt';

      case '1010020000000':
        console.log('✅ 1010020000000 - สินเชื่อโอนเล่มทะเบียน สำหรับรถยังไม่ปลอดภาระ กรณีติดภาระกับเงินให้ใจ');
        return 'c2c-topup';

      case '2010010000000':
        console.log('✅ 2010010000000 - สินเชื่อจำนำเล่มทะเบียน สำหรับรถปลอดภาระ');
        return 'crl-generic';

      case '2010030000000':
        console.log('✅ 2010030000000 - สินเชื่อจำนำเล่มทะเบียน สำหรับรถยังไม่ปลอดภาระ กรณีติดภาระกับสถาบันการเงิน/ลีสซิ่งอื่น');
        return 'crl-bt';

      case '2010020000000':
        console.log('✅ 2010020000000 - สินเชื่อจำนำเล่มทะเบียน สำหรับรถยังไม่ปลอดภาระ กรณีติดภาระกับเงินให้ใจ');
        return 'crl-topup';

      case '1010020000002':
        console.log('✅ 1010020000002 - สินเชื่อโอนเล่มทะเบียน สำหรับรถยังไม่ปลอดภาระ กรณีติดภาระกับเงินให้ใจ (Special Lead)');
        return 'c2c-special';

      case '2010020000002':
        console.log('✅ 2010020000002 - สินเชื่อจำนำเล่มทะเบียน สำหรับรถยังไม่ปลอดภาระ กรณีติดภาระกับเงินให้ใจ (Special Lead)');
        return 'crl-special';

      case '3010010000000':
        console.log('✅ 3010010000000 - สินเชื่อ (Floor Plan)');
        return 'floorplan';

      default:
        console.log('ไม่พบรหัสสินเชื่อ');
        return 'ไม่พบรหัสสินเชื่อ';
    }

  }
};


export const LoopContainsClick_RadioBtn = async (page: Page, selector: string, text: string) => {
  const bodyText = await page.locator('body').innerText();
  if (bodyText.includes(text)) {
    console.log(`✅ พบข้อความ "${text}"`);

    const labels = page.locator(`${selector}:has-text("${text}")`);
    const count = await labels.count();

    for (let i = 0; i < count; i++) {
      const label = labels.nth(i);
      const radio = label.locator('input[type="radio"]');
      if (await radio.isVisible()) {
        await radio.check({ force: true });
      }
    }
  } else {
    console.log(`❌ ไม่พบข้อความ ${text}`);
  }
};

export const LoopContainsClick_CheckboxBtn = async (page: Page, selector: string, text: string) => {
  const bodyText = await page.locator('body').innerText();

  if (bodyText.includes(text)) {
    console.log(`✅ พบข้อความ "${text}"`);

    const labels = page.locator(`${selector}:has-text("${text}")`);
    const count = await labels.count();

    for (let i = 0; i < count; i++) {
      const label = labels.nth(i);
      const checkbox = label.locator('input[type="checkbox"]');
      if (await checkbox.isVisible()) {
        await checkbox.check({ force: true });
      }
    }

  } else {
    console.log(`❌ ไม่พบข้อความ ${text}`);
  }
};


export const ClearElement = async (page: Page, selector: string, index = 0) => {
  await page.locator(selector).nth(index).clear();
};


export const GetBodyTextInclude = async (
  page: Page,
  textInclude: string,
  callback: () => Promise<void> | void
) => {
  const bodyText = await page.locator('body').innerText();

  if (bodyText.includes(textInclude)) {
    console.log(`✅ พบข้อความ "${textInclude}"`);
    await callback(); // เรียกใช้ฟังก์ชันที่ส่งเข้ามา
  } else {
    console.log(`❌ ไม่พบข้อความ "${textInclude}"`);
  }
};


export const SetItem_TableRowResult = async (page: Page, keyText: string) => {
  const row = page.locator('tr', { hasText: keyText });

  const text = await row.locator('td[result]').innerText();
  const result = text.trim();

  await page.evaluate(
    ([keyText, result]) => {
      localStorage.setItem(keyText, result);
    },
    [keyText, result]
  );

  console.log(`📦 ${keyText} Result: ${result}`);
};


export const GetandCheck_TableRowResult = async (
  page: Page,
  keyText: string,
  expectedResult: string
) => {
  const storedResult = await page.evaluate(
    (keyText) => localStorage.getItem(keyText),
    keyText
  );

  if (storedResult === expectedResult) {
    console.log(`✅ ${keyText} Result: ${storedResult} — Expected Correct`);
  } else {
    console.log(
      `❌ ${keyText} Result: ${storedResult} — Expected Incorrect (Expected: ${expectedResult})`
    );
  }

  // เพิ่ม assert ให้เทสต์ fail ถ้าไม่ตรง
  if (storedResult !== expectedResult) {
    throw new Error(
      `❌ ${keyText} Result mismatch — got "${storedResult}", expected "${expectedResult}"`
    );
  }
};

export function random4Digits(): string {
  return String(Math.floor(Math.random() * 10000)).padStart(4, '0');   //สุ่มช่วง 0.0000 – 0.9999  > random * 10000 ขยายช่วงเป็น 0 – 9999.9999 > Math.floor ปัดเศษลงให้เป็นจำนวนเต็ม
};

export function random4Chars(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
};

// 🎯 ฟังก์ชันสุ่มชื่อ (ไทย)
export function getRandomThaiFirstName(): string {
  return fakerTH.person.firstName();
};

export function getRandomThaiLastName(): string {
  return fakerTH.person.lastName();
};

// 🎯 ฟังก์ชันสุ่มชื่อ (อังกฤษ)
export function getRandomEnglishFirstName(): string {
  return fakerEN.person.firstName();
};

export function getRandomEnglishLastName(): string {
  return fakerEN.person.lastName();
};

// 🎯 ฟังก์ชันสุ่ม Email จาก Firstname ภาษาอังกฤษ
export function getRandomEnglishEmail(): string {
  const firstName = fakerEN.person.firstName().toLowerCase();
  const domain = fakerEN.internet.domainName();
  return `${firstName}${fakerEN.number.int({ min: 10, max: 999 })}@${domain}`;
};

export const verify = {
  text: async (
    page: Page,
    selector: string,
    childSelector: string,
    expectedText: string,
    selectorIndex: number = 0,
    childSelectorIndex: number = 0
  ) => {
    const locator = page
      .locator(selector)
      .nth(selectorIndex)
      .locator(childSelector)
      .nth(childSelectorIndex);

    await page.waitForTimeout(250);

    if (await locator.isVisible()) {
      const actualText = (await locator.textContent())?.trim();
      if (actualText?.includes(expectedText)) {
        await expect(locator).toHaveText(String(expectedText));
        console.log(`✅ text match : "${expectedText}"`)
      }
    } else {
      console.log(`⚠️ Skip, element not visible for expected: "${expectedText}"`);
    }
  },

  value: async (
    page: Page,
    selector: string,
    childSelector: string,
    expectedText: string,
    selectorIndex: number = 0,
    childSelectorIndex: number = 0
  ) => {
    const locator = page.locator(selector).nth(selectorIndex).locator(childSelector).nth(childSelectorIndex);
    await expect(locator).toHaveValue(expectedText);
  },

  date: async (page: Page, selector: string, childSelector: string, expectedDate: string) => {
    const dateText = await page.locator(selector).locator(childSelector).innerText();
    const actualDate = dateText.split(' ')[0]; // แยกเฉพาะวันที่
    expect(actualDate).toBe(expectedDate);
  },

  phone_number: async (page: Page, selector: string, childSelector: string, expectedText: string) => {
    const phoneText = await page.locator(selector).locator(childSelector).innerText();
    const phone_number = phoneText.replace(/-/g, '').trim();
    expect(phone_number).toBe(expectedText);
  },

  imageName: async (
    page: Page,
    selector: string,
    childSelector: string,
    expectedText: any,
    selectorIndex: number = 0,
    childSelectorIndex: number = 0
  ) => {
    const fileName = expectedText.split('/').pop() || '';
    const locator = page.locator(selector).nth(selectorIndex).locator(childSelector).nth(childSelectorIndex);
    await expect(locator).toHaveText(fileName);

    // log ว่าถูกต้องแล้ว
    let actualText = await locator.textContent();
    console.log(`✅ imageName ถูกต้อง: expected "${fileName}", Actual: "${actualText?.trim()}"`);
  },
};

export const expectFieldValue = async (
  page: Page,
  selector: string,
  expectedValue: string,
  index: number = 0
) => {
  const locator = page.locator(selector).nth(index);

  // ตรวจสอบ tagName ก่อน
  const tagName = await locator.evaluate(el => el.tagName.toLowerCase());
  let actualValue: string | null = null;

  if (["input", "textarea", "select"].includes(tagName)) {
    actualValue = await locator.inputValue();
  } else {
    actualValue = (await locator.textContent())?.trim() || "";
  }

  try {
    if (["input", "textarea", "select"].includes(tagName)) {
      await expect(locator).toHaveValue(expectedValue);
    } else {
      await expect(locator).toHaveText(expectedValue);
    }

    console.log(
      `✅ Pass → expected: "${expectedValue}", actual: "${actualValue}"`
    );
  } catch (error) {
    console.error(
      `❌ Fail → expected: "${expectedValue}", actual: "${actualValue}"`
    );
    throw error; // re-throw เพื่อให้ test fail ตามปกติ
  }
};


// ---------------------------------------------------------- Validate Fee ----------------------------------------------------------
// 🎯 ฟังก์ชันตรวจสอบค่าใช้จ่ายจาก Fee List และเขียนผลลัพธ์ลงไฟล์ JSON
export async function Check_And_Write_Fee(page: any, feeNames: string[], outputFile: string, station: string) {
  console.log('---------------------------------------------------------');
  console.log(`🎯 ฟังก์ชันตรวจสอบค่าใช้จ่ายจาก Fee List และเขียนผลลัพธ์ลงไฟล์ JSON`);
  console.log('---------------------------------------------------------');

  type FeeResult = { fee_name: string; fee_cost_total: number; };

  function normalize(text: string): string {
    return text.replace(/\s+/g, '').trim(); ``
  }

  function isMatch(a: string, b: string): boolean {
    return a.localeCompare(b, 'th', { sensitivity: 'base' }) === 0;
  }

  // ----------------------------
  // 1️⃣ รอให้ Fee List โหลด
  // ----------------------------
  await page.waitForSelector('.MuiDataGrid-row', { state: 'visible', timeout: 60000 });
  const allRows = page.locator('.MuiDataGrid-row');

  // ----------------------------
  // 2️⃣ Scroll แบบ batch เพื่อให้ virtual rows โหลดครบ
  // ----------------------------
  let lastCount = 0;
  while (true) {
    const currentCount = await allRows.count();
    if (currentCount === lastCount) break; // ถ้าไม่มี row ใหม่แล้ว
    lastCount = currentCount;

    // scroll batch แถวล่าสุด
    await allRows.nth(currentCount - 1).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200); // รอให้ row ใหม่ render
  }

  const finalRowCount = await allRows.count();
  console.log(`📋 พบทั้งหมด ${finalRowCount - 15} แถวใน Fee List`);

  const results: FeeResult[] = [];

  // ----------------------------
  // 3️⃣ วนลูปตาม feeNames ที่ต้องการ
  // ----------------------------
  for (const feeName of feeNames) {
    let matchedRow = null;

    for (let i = 0; i < finalRowCount; i++) {
      const row = allRows.nth(i);
      const cellLocator = row.locator('[data-field="fee_name"]');

      if ((await cellLocator.count()) === 0) continue;

      const cellName = (await cellLocator.first().innerText()).trim();

      if (isMatch(normalize(cellName), normalize(feeName))) {
        matchedRow = row;
        break;
      }
    }

    if (!matchedRow) {
      console.warn(`❌ ไม่พบแถว: ${feeName}`);
      results.push({ fee_name: feeName, fee_cost_total: 0 });
      continue;
    }

    // เลือก checkbox
    const checkbox = matchedRow.locator('[data-field="__check__"] input[type="checkbox"]').first();

    if (station === 'bo1') {
      if (!(await checkbox.isChecked())) await checkbox.check(); // บังคับ check สำหรับ bo1
    } else if (station === 'bo2') {
      const isChecked = await checkbox.isChecked();
      if (!isChecked) {
        console.log(`🚫 ข้าม: ${feeName} (ยังไม่ได้เลือก checkbox)`);
        continue; // ข้ามค่า uncheck สำหรับ bo2
      }
    };

    // ดึงค่า fee_cost_total (เหมือนกันทั้ง bo1 และ bo2)
    const feeText = (await matchedRow.locator('[data-field="fee_cost_total"]').innerText())?.trim() || '0';
    const feeValue = parseFloat(feeText.replace(/,/g, '')) || 0;

    // push result
    results.push({ fee_name: feeName, fee_cost_total: feeValue });
  }

  // ----------------------------
  // 4️⃣ คำนวณรวมและเขียน JSON
  // ----------------------------
  const sum_fee_total = results.reduce((sum, item) => sum + item.fee_cost_total, 0);

  const jsonOutput = {
    fees: results,
    sum_fee_total,
    generated_at: new Date().toISOString()
  };

  await JSONFile.writeJsonToFile(outputFile, jsonOutput);

  console.log(`📦 เขียน JSON เรียบร้อย`);
};

// 🎯 ฟังก์ชันตรวจสอบยอดรวมค่าใช้จ่ายจาก DOM กับ JSON และตรวจสอบคงเหลือ
export async function Verify_Fees_By_List(page: any, jsonPath: string, station: string) {
  console.log('---------------------------------------------------------');
  console.log(`🎯 ฟังก์ชันตรวจสอบยอดรวมค่าใช้จ่ายจาก DOM กับ JSON และตรวจสอบคงเหลือ`);
  console.log('---------------------------------------------------------');
  type Fee = { fee_name: string; fee_cost_total: number };

  // 📂 อ่านข้อมูล JSON
  const data = JSONFile.readAndParseJson(jsonPath);
  const feesFromJson: Fee[] = data.fees || [];

  // 📋 list ของค่าใช้จ่าย
  const listItems = page.locator('ul.MuiList-root > li');
  const count = await listItems.count();

  let sumFromDOM = 0; // ✅ รวมเฉพาะค่าที่ check
  let displayIndex = 1;
  const feesFromDOM: Fee[] = [];

  console.log('📋 ตรวจสอบค่าใช้จ่ายทีละรายการ:');

  for (let i = 0; i < count; i++) {
    const li = listItems.nth(i);

    // 🔹 ดึงชื่อค่าใช้จ่ายจาก <span>
    let feeName = (await li.locator('span').innerText()).trim();
    feeName = feeName.replace(/^\d+\.\s*/, '');

    if (feeName === 'Application Information') continue;

    // 🔹 ดึงตัวเลขค่าใช้จ่ายท้าย <li>
    const feeValueText = await li.evaluate((el: Element) => {
      const span = el.querySelector('span');
      if (!span) return '';
      return el.textContent?.replace(span.textContent || '', '').trim() || '';
    });

    const feeValue = parseFloat(feeValueText.replace(/,/g, '')) || 0;

    // ⚡ ถ้า uncheck (ไม่มีค่า หรือ 0) → ข้าม
    if (!feeValueText || feeValue === 0) {
      console.log(`🚫 ข้าม: ${displayIndex}. ${feeName} (uncheck / ไม่มีค่า)`);
      displayIndex++;
      continue;
    }

    // ✅ เก็บเฉพาะค่า check
    sumFromDOM += feeValue;
    feesFromDOM.push({ fee_name: feeName, fee_cost_total: feeValue });

    // ✅ ตรวจสอบกับ JSON เดิม
    const matched = feesFromJson.find(f => f.fee_name === feeName);
    if (matched) {
      if (matched.fee_cost_total !== feeValue) {
        console.log(`⚠️ ค่าไม่ตรง: ${displayIndex}. ${feeName} (DOM=${feeValue}, JSON=${matched.fee_cost_total})`);
      } else {
        console.log(`✅ ตรงกัน: ${displayIndex}. ${feeName} (ค่า Fee = ${feeValue})`);
      }
    } else {
      console.log(`❌ ไม่พบใน JSON: ${displayIndex}. ${feeName} (DOM=${feeValue})`);
    }

    displayIndex++;
  }

  // ---------------- ดึงค่า FA, คงเหลือ ----------------
  let faAmount = 0;
  let balanceAmount = 0;

  async function getAmount(page: any, selector: string, isInput = true) {
    const locator = page.locator(selector);
    await locator.waitFor({ state: 'visible', timeout: 5000 });
    const text = isInput ? await locator.inputValue() : await locator.innerText();
    return parseFloat(text.replace(/ บาท/g, '').replace(/,/g, '').trim()) || 0;
  }

  if (station === 'bo1') {
    faAmount = await getAmount(page, 'input[name="cost_result_fa"]');
    balanceAmount = await getAmount(page, 'input[name="cost_result_balance"]');
  } else if (station === 'bo2') {
    faAmount = await getAmount(page, 'div[data-testid="cost_result_fa"] span.MuiTypography-body2', false);
    balanceAmount = await getAmount(page, 'div[data-testid="cost_result_balance"] span.MuiTypography-body2', false);
  }

  const expectedBalance = faAmount - sumFromDOM;

  // ---------------- สรุปผล ----------------
  console.log('----------------------------------------');
  console.log('💰 สรุปยอดรวม (เฉพาะค่า check):');
  console.log(`💵 รายการค่าใช้จ่ายที่ตรวจสอบ: ${feesFromDOM.length} รายการ`);
  console.log(`⇢ DOM รวมจาก checkbox: ${sumFromDOM}`);
  console.log(`⇢ JSON sum_fee_total : ${data.sum_fee_total}`);

  if (sumFromDOM === data.sum_fee_total) {
    console.log('✅ รวมค่าใช้จ่ายตรงกับ JSON');
  } else {
    console.log(`❌ รวมค่าใช้จ่ายไม่ตรง! DOM=${sumFromDOM}, JSON=${data.sum_fee_total}`);
  }

  console.log('💵 ตรวจสอบยอดคงเหลือ:');
  console.log(`⇢ FA = ${faAmount}`);
  console.log(`⇢ รวมค่าใช้จ่าย (check แล้ว) = ${sumFromDOM}`);
  console.log(`⇢ DOM คงเหลือ = ${balanceAmount}`);
  if (balanceAmount === expectedBalance) {
    console.log(`✅ คงเหลือตรงกับ : FA - ค่าใช้จ่าย = ${expectedBalance}`);
  } else {
    console.log(`❌ คงเหลือไม่ตรง! DOM=${balanceAmount}, ควรจะเป็น ${expectedBalance}`);
  }

  // ✅ เขียน JSON (เฉพาะ fee ที่ check แล้ว)
  const result = {
    fees: feesFromDOM,
    sum_fee_total: sumFromDOM,
    finance_amount: faAmount,
    remaining_balance: balanceAmount,
    expected_remaining_balance: expectedBalance,
  };

  await JSONFile.writeJsonToFile(jsonPath, result);
  console.log('📦 เขียน JSON เรียบร้อย');

  return result;
}


// 🎯 ฟังก์ชันตรวจสอบค่าใช้จ่ายจาก Fee List และเขียนผลลัพธ์ลงไฟล์ JSON (uncheck จะไม่เขียน Fee)
export async function Check_And_Write_Fee_Uncheck(page: any, feeNames: string[], outputFile: string) {
  console.log('---------------------------------------------------------');
  console.log(`🎯 ฟังก์ชันตรวจสอบค่าใช้จ่ายจาก Fee List และเขียนผลลัพธ์ลงไฟล์ JSON (uncheck จะไม่เขียน Fee)`);
  console.log('---------------------------------------------------------');
  type FeeResult = { fee_name: string; fee_cost_total: number };

  function normalize(text: string): string {
    return text.replace(/\s+/g, '').trim();
  }

  function isMatch(a: string, b: string): boolean {
    return a.localeCompare(b, 'th', { sensitivity: 'base' }) === 0;
  }

  // 1️⃣ รอให้ Fee List โหลด
  await page.waitForSelector('.MuiDataGrid-row', { state: 'visible', timeout: 60000 });
  const allRows = page.locator('.MuiDataGrid-row');

  // 2️⃣ Scroll แบบ batch เพื่อให้ virtual rows โหลดครบ
  let lastCount = 0;
  while (true) {
    const currentCount = await allRows.count();
    if (currentCount === lastCount) break;
    lastCount = currentCount;
    await allRows.nth(currentCount - 1).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
  }

  const finalRowCount = await allRows.count();
  console.log(`📋 พบทั้งหมด ${finalRowCount - 15} แถวใน Fee List`);

  const results: FeeResult[] = [];

  // 3️⃣ วนลูปตาม feeNames
  for (const feeName of feeNames) {
    let matchedRow = null;

    for (let i = 0; i < finalRowCount; i++) {
      const row = allRows.nth(i);
      const cellLocator = row.locator('[data-field="fee_name"]');

      if ((await cellLocator.count()) === 0) continue;

      const cellName = (await cellLocator.first().innerText()).trim();
      if (isMatch(normalize(cellName), normalize(feeName))) {
        matchedRow = row;
        break;
      }
    }

    if (!matchedRow) {
      console.warn(`❌ ไม่พบแถว: ${feeName}`);
      continue; // ไม่เขียนลง JSON
    }

    // ทำการ uncheck ถ้า checkbox ถูกเลือกอยู่
    const checkbox = matchedRow.locator('[data-field="__check__"] input[type="checkbox"]').first();
    if (checkbox && (await checkbox.isChecked())) {
      await checkbox.uncheck();
      console.log(`📌🚫 ทำการ uncheck: ${feeName}`);
    }

    // ตรวจสอบค่า fee_cost_total
    const feeText = (await matchedRow.locator('[data-field="fee_cost_total"]').innerText())?.trim() || '0';
    const feeValue = parseFloat(feeText.replace(/,/g, '')) || 0;

    // ❌ ถ้า uncheck ไม่ต้อง push ลง results
    const isChecked = await checkbox.isChecked();
    if (isChecked) {
      results.push({ fee_name: feeName, fee_cost_total: feeValue });
    } else {
      console.log(`📦🚫 รายการ : ${feeName} → ไม่เขียนลง JSON`);
    }
  }

  // 4️⃣ คำนวณรวมและเขียน JSON
  const sum_fee_total = results.reduce((sum, item) => sum + item.fee_cost_total, 0);

  const jsonOutput = {
    fees: results,
    sum_fee_total,
    generated_at: new Date().toISOString(),
  };

  await JSONFile.writeJsonToFile(outputFile, jsonOutput);
  console.log(`📦 เขียน JSON เรียบร้อย`);
};

// 🎯 ฟังก์ชัน [ เสริม ]ตรวจสอบยอดรวมค่าใช้จ่ายหลัง uncheck ทั้งหมด
export async function Verify_Fees_Unchecked(page: any, jsonPath: string, station: string) {
  console.log('---------------------------------------------------------');
  console.log(`🎯 ฟังก์ชัน [ เสริม ] ตรวจสอบยอดรวมค่าใช้จ่ายหลัง uncheck ทั้งหมด`);
  console.log('---------------------------------------------------------');

  const data = JSONFile.readAndParseJson(jsonPath);

  // ตรวจสอบ list ค่าใช้จ่ายใน DOM
  const listItems = page.locator('ul.MuiList-root > li');
  const count = await listItems.count();

  if (count === 1) console.log('✅ ไม่มีรายการค่าใช้จ่ายใน DOM (ถูก uncheck ทั้งหมด)');
  else console.warn(`❌ พบรายการค่าใช้จ่ายใน DOM ${count} รายการ หลัง uncheck`);

  // ฟังก์ชันดึงค่า FA, ยอดรวม, คงเหลือ
  async function getAmount(selector: string, isInput = true) {
    const locator = page.locator(selector);
    await locator.waitFor({ state: 'visible', timeout: 5000 });
    const text = isInput ? await locator.inputValue() : await locator.innerText();
    return parseFloat(text.replace(/ บาท/g, '').replace(/,/g, '').trim()) || 0;
  }

  let totalAmount = 0, faAmount = 0, balanceAmount = 0;

  if (station === 'bo1') {
    totalAmount = await getAmount('input[name="cost_result_cost"]');
    faAmount = await getAmount('input[name="cost_result_fa"]');
    balanceAmount = await getAmount('input[name="cost_result_balance"]');
  } else {
    totalAmount = await getAmount('div[data-testid="cost_result_cost"] span.MuiTypography-body2', false);
    faAmount = await getAmount('div[data-testid="cost_result_fa"] span.MuiTypography-body2', false);
    balanceAmount = await getAmount('div[data-testid="cost_result_balance"] span.MuiTypography-body2', false);
  }

  const expectedBalance = faAmount - totalAmount;

  if (totalAmount === 0) console.log('✅ ยอดรวมค่าใช้จ่าย = 0 หลัง uncheck');
  else console.warn(`❌ ยอดรวมค่าใช้จ่ายไม่ถูกต้อง! DOM=${totalAmount}`);

  if (balanceAmount === expectedBalance) console.log(`✅ คงเหลือตรงกับ FA - ค่าใช้จ่าย = ${expectedBalance}`);
  else console.warn(`❌ คงเหลือไม่ตรง! DOM=${balanceAmount}, ควร=${expectedBalance}`);

  if (Array.isArray(data.fees) && data.fees.length === 0 && data.sum_fee_total === 0) {
    console.log('✅ JSON ถูกต้อง หลัง uncheck ทั้งหมด');
  } else {
    console.warn('❌ JSON ไม่ถูกต้อง! ควรเป็น array ว่างและ sum_fee_total=0');
    console.log(JSON.stringify(data, null, 2));
  }

  return { domCount: count, totalAmount, faAmount, balanceAmount, expectedBalance, jsonData: data };
}