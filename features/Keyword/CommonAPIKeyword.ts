export const WaitProcess = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const generateRqUID = () => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    const datePart = `${YYYY}${MM}${DD}`;
    const RqAppId = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    const rand8 = String(Math.floor(Math.random() * 1e8)).padStart(8, '0');
    const RqUID = `${RqAppId}_${datePart}_${rand8}`;
    return { RqUID, RqAppId };
}

export const generateRqDt = () => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    return `${YYYY}${MM}${DD}${hh}${mm}${ss}`;
}

export const generateThaiID = () => {
    const weights = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let thaiID = '1';
    for (let i = 0; i < 11; i++) {
        thaiID += Math.floor(Math.random() * 10);
    }
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(thaiID.charAt(i)) * weights[i];
    }
    const checksum = (11 - (sum % 11)) % 10;
    return thaiID + checksum;
}

export const generateSaleAppNo = () => {
    const today = new Date();
    const date = {
        today,
        yearAD: today.getFullYear(),
        month: (today.getMonth() + 1).toString().padStart(2, '0'),
        day: today.getDate().toString().padStart(2, '0'),
    };

    const dateTimeNumber =
        `${date.yearAD}${date.month}${date.day}` +
        `${date.today.getHours().toString().padStart(2, '0')}` +
        `${date.today.getMinutes().toString().padStart(2, '0')}` +
        `${date.today.getSeconds().toString().padStart(2, '0')}`;

    return `AT-${dateTimeNumber}`;
}

export const generateDateFull = () => {
    let today = new Date();
    return {
        today: today,
        day: today.getDate().toString().padStart(2, '0'),
        month: (today.getMonth() + 1).toString().padStart(2, '0'),
        yearAD: today.getFullYear(),
        yearBE: today.getFullYear() + 543,
        formattedDate: `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear() + 543}`, // รูปแบบ "DD/MM/YYYY (พ.ศ.)"
        transactionDateTime: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`, // รูปแบบ "YYYY-MM-DD"
    };
};

export const generateCurrentDate = () => {
    const now = new Date();
    const YYYY = now.getFullYear() + 543;
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    return `${DD}/${MM}/${YYYY}`;
}

export const generateDate = () => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    return `${YYYY}-${MM}-${DD}`;
}

export const generateDateSplit = () => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    return `${YYYY}${MM}${DD}`;
}


export const generateThaiTaxId = () => {
    const prov = String(Math.floor(Math.random() * 77) + 1).padStart(2, '0');
    const year = String(Math.floor(Math.random() * 40) + 65); // 2565–2605
    const seq = String(Math.floor(Math.random() * 99999) + 1).padStart(5, '0');
    const base = `0${prov}5${year}${seq}`;
    const chk = (11 - [...base].reduce((s, d, i) => s + Number(d) * (13 - i), 0) % 11) % 10;
    const taxId = base + chk;
    return taxId;
}

export const generateFirstPaymentDate = () => {
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = "15";
    const DueDate = `${YYYY}-${MM}-${DD}`;
    return DueDate;
}

export const generateContactNumber = (prefix = "1001", totalLength = 13) => {
    const digits = Array.from({ length: totalLength - prefix.length }, () => Math.floor(Math.random() * 10)).join('');
    const ContactNumber = prefix + digits;
    return ContactNumber;
}

export const generateChassisNumber = (length = 29) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let Chassis_number = '';
    for (let i = 0; i < length; i++) {
        Chassis_number += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return Chassis_number;
}

export const generateTransactionId = () => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const TransactionId = `${YYYY}${MM}${DD}${hh}${mm}${ss}`;
    return TransactionId;
}

// Generate random car registration number in format: NXXNNN (e.g., 2ขง328)
export const generateThaiPlate = () => {
    const thaiChars = ['ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ'];
    const numberPart = Math.floor(Math.random() * 9) + 1; // 1-9
    const char1 = thaiChars[Math.floor(Math.random() * thaiChars.length)];
    const char2 = thaiChars[Math.floor(Math.random() * thaiChars.length)];
    const digits = Math.floor(100 + Math.random() * 900); // 100-999
    return `${numberPart}${char1}${char2}${digits}`;
}


export const generateFormattedCode = (contract_number: string) => {
    const firstDigit = contract_number.toString().charAt(0);
    const today = new Date();
    const yyyymmdd = today.toISOString().slice(0, 10).replace(/-/g, '');

    let prefix = '';

    if (firstDigit === '1' || firstDigit === '3') {
        prefix = '040004'; // C2C
    } else if (firstDigit === '2' || firstDigit === '8') {
        prefix = '040003'; // CRL
    } else {
        throw new Error('Unsupported contract number prefix');
    }
    return prefix + yyyymmdd;
}

export const generateThaiFirstName = () => {
    const thaiFirstNames = [
        'กิตติ', 'สมชาย', 'อนันต์', 'ธีรพงษ์', 'วรเทพ',
        'ปวีณา', 'สุรีย์', 'จิราภรณ์', 'ชุติมา', 'ศิริพร'
    ];
    return thaiFirstNames[Math.floor(Math.random() * thaiFirstNames.length)];
};

export const generateThaiLastName = () => {
    const thaiLastNames = [
        'ใจดี', 'ทองสุข', 'แสงชัย', 'ศรีสมบูรณ์', 'อุดมผล',
        'พัฒนพงศ์', 'วิริยะกิจ', 'วงศ์วัฒนะ', 'เกษมสุข', 'บุญเรือง'
    ];
    return thaiLastNames[Math.floor(Math.random() * thaiLastNames.length)];
};


export const generateThaiFirstNameEN = () => {
    const thaiFirstNamesEN = [
        'Kitti', 'Somchai', 'Anan', 'Theeraphong', 'Worathep',
        'Paweena', 'Suree', 'Jiraporn', 'Chutima', 'Siriporn'
    ];
    return thaiFirstNamesEN[Math.floor(Math.random() * thaiFirstNamesEN.length)];
};

export const generateThaiLastNameEN = () => {
    const thaiLastNamesEN = [
        'Jaidee', 'Thongsuk', 'Saengchai', 'Srisomboon', 'Udomphon',
        'Pattanapong', 'Wiriyakit', 'Wongwattana', 'Kasemsuk', 'Boonruang'
    ];
    return thaiLastNamesEN[Math.floor(Math.random() * thaiLastNamesEN.length)];
};


const thaiFullNames = [
    {
        firstNameTH: 'กิตติ', firstNameEN: 'Kitti',
        lastNameTH: 'ใจดี', lastNameEN: 'Jaidee'
    },
    {
        firstNameTH: 'สมชาย', firstNameEN: 'Somchai',
        lastNameTH: 'ทองสุข', lastNameEN: 'Thongsuk'
    },
    {
        firstNameTH: 'อนันต์', firstNameEN: 'Anan',
        lastNameTH: 'แสงชัย', lastNameEN: 'Saengchai'
    },
    {
        firstNameTH: 'ธีรพงษ์', firstNameEN: 'Theeraphong',
        lastNameTH: 'ศรีสมบูรณ์', lastNameEN: 'Srisomboon'
    },
    {
        firstNameTH: 'วรเทพ', firstNameEN: 'Worathep',
        lastNameTH: 'อุดมผล', lastNameEN: 'Udomphon'
    },
    {
        firstNameTH: 'ปวีณา', firstNameEN: 'Paweena',
        lastNameTH: 'พัฒนพงศ์', lastNameEN: 'Pattanapong'
    },
    {
        firstNameTH: 'สุรีย์', firstNameEN: 'Suree',
        lastNameTH: 'วิริยะกิจ', lastNameEN: 'Wiriyakit'
    },
    {
        firstNameTH: 'จิราภรณ์', firstNameEN: 'Jiraporn',
        lastNameTH: 'วงศ์วัฒนะ', lastNameEN: 'Wongwattana'
    },
    {
        firstNameTH: 'ชุติมา', firstNameEN: 'Chutima',
        lastNameTH: 'เกษมสุข', lastNameEN: 'Kasemsuk'
    },
    {
        firstNameTH: 'ศิริพร', firstNameEN: 'Siriporn',
        lastNameTH: 'บุญเรือง', lastNameEN: 'Boonruang'
    }
];


export const generateThaiNameWithEN = () => {
    const full = thaiFullNames[Math.floor(Math.random() * thaiFullNames.length)];

    return {
        firstNameTH: full.firstNameTH,
        lastNameTH: full.lastNameTH,
        firstNameEN: full.firstNameEN,
        lastNameEN: full.lastNameEN,
        fullNameTH: `${full.firstNameTH} ${full.lastNameTH}`,
        fullNameEN: `${full.firstNameEN} ${full.lastNameEN}`
    };
};


export const timeAPI = () => {
    const list = ["08:30", "10:30", "12:30", "13:30"];

    // ดึงเวลาปัจจุบัน
    const currentDate = new Date();
    const currentTimeString = currentDate.toTimeString().slice(0, 5); // HH:mm

    console.log("เวลาปัจจุบัน:", currentTimeString);

    // ฟังก์ชันเปรียบเทียบเวลา
    const getNextTimeWithDate = (timeList: any, currentTime: any, currentDate: any) => {
        const currentTimeInMinutes = parseInt(currentTime.split(":")[0]) * 60 + parseInt(currentTime.split(":")[1]);

        for (const time of timeList) {
            const [hours, minutes] = time.split(":").map(Number);
            const timeInMinutes = hours * 60 + minutes;

            if (timeInMinutes > currentTimeInMinutes) {
                // เวลามากกว่าปัจจุบัน ใช้วันที่ปัจจุบัน
                const nextDate = new Date(currentDate);
                nextDate.setHours(hours, minutes, 0, 0);
                return nextDate;
            }
        }

        // ถ้าเวลาปัจจุบันมากกว่าเวลาสุดท้ายใน list ให้เลือกเวลาแรก (08:30) และเพิ่มวัน
        const [nextHours, nextMinutes] = timeList[0].split(":").map(Number);
        const nextDate = new Date(currentDate);
        nextDate.setDate(nextDate.getDate() + 1); // เพิ่มวัน
        nextDate.setHours(nextHours, nextMinutes, 0, 0);
        return nextDate;
    };

    // เรียกฟังก์ชันและแยกวัน-เวลา
    const nextTimeWithDate = getNextTimeWithDate(list, currentTimeString, currentDate);

    // แยกวันและเวลา
    const nextDate = nextTimeWithDate.toISOString(); // วันที่
    const nextTime = nextTimeWithDate.toTimeString().slice(0, 5); // เวลา

    console.log("วันที่ถัดไป:", nextDate);
    console.log("เวลาถัดไป:", nextTime);

    return {
        nextDate,
        nextTime
    };
}

