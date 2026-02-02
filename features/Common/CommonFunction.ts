import { Page, expect } from '@playwright/test';
import { element } from '../Elements/keyfullPage/keyfullPageElement';
import { data } from '../Data/CommonData';
import { verify } from '../Keyword/CommonKeyword'; // import class Verify ที่เราสร้างไว้


let MuiTypography_body1 = '.MuiTypography-body1';
let MuiTypography_body2 = '.MuiTypography-body2';
let css_9glgiu = '.css-9glgiu';
let tabpanel_0 = '[id="tabpanel-0"]'; 
let tabpanel_1 = '[id="tabpanel-1"]'; 
let app_keyin = '[data-id="app-keyin"]';
let MuiTypography_root_MuiTypography_body2_css_a1if02 = '[class="MuiTypography-root MuiTypography-body2 css-a1if02"]';
let MuiTypography_root_MuiTypography_body1_css_10xxmbz = '[class="MuiTypography-root MuiTypography-body1 css-10xxmbz"]';



export class VerifyTextOnTask {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	task_check_document_keyshort = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();

			// เลือกหมวดเอกสารแรก
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.form).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'คำขอสินเชื่อประเภทโอนเล่มทะเบียน (0)');

			// เลือกหมวดเอกสารถัดไป
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.transport_set).click();
			// await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน) (0)', 2);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'เอกสารตรวจนอก (0)', 3);
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.contract).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สัญญาเช่าซื้อ (สคบ.) (0)', 1);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.customer_doc).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ) (0)');
			// await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า  (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ (0)', 2);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น (0)', 3);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น) (0)', 4);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.other_insurance).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือรับรองการเช่าซื้อ (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'เอกสารอื่นๆ (0)', 1);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.consent).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน (0)', 2);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.occupation_and_income_doc).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'เอกสารรายได้ SA (0)');

			// ---------- Checkbox ----------
			await verify.text(this.page, '[data-testid="verified.CT10002.verified"]', MuiTypography_body2, 'คำขอสินเชื่อประเภทโอนเล่มทะเบียน');
			await verify.text(this.page, '[data-testid="verified.CL10027.verified"]', MuiTypography_body2, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)');
			await verify.text(this.page, '[data-testid="verified.CT10009.verified"]', MuiTypography_body2, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก');
			await verify.text(this.page, '[data-testid="verified.CT10010.verified"]', MuiTypography_body2, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)');
			await verify.text(this.page, '[data-testid="verified.DT10005.verified"]', MuiTypography_body2, 'เอกสารตรวจนอก');
			await verify.text(this.page, '[data-testid="verified.CT10001.verified"]', MuiTypography_body2, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน');
			await verify.text(this.page, '[data-testid="verified.CT10004.verified"]', MuiTypography_body2, 'สัญญาเช่าซื้อ (สคบ.)');
			await verify.text(this.page, '[data-testid="verified.ID10003.verified"]', MuiTypography_body2, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)');
			await verify.text(this.page, '[data-testid="verified.ID10004.verified"]', MuiTypography_body2, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า');
			await verify.text(this.page, '[data-testid="verified.ID10002.verified"]', MuiTypography_body2, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ');
			await verify.text(this.page, '[data-testid="verified.ID10001.verified"]', MuiTypography_body2, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น');
			await verify.text(this.page, '[data-testid="verified.OT10001.verified"]', MuiTypography_body2, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)');
			await verify.text(this.page, '[data-testid="verified.CT10006.verified"]', MuiTypography_body2, 'หนังสือรับรองการเช่าซื้อ');
			await verify.text(this.page, '[data-testid="verified.CT10007.verified"]', MuiTypography_body2, 'เอกสารอื่นๆ');
			await verify.text(this.page, '[data-testid="verified.CS10003.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)');
			await verify.text(this.page, '[data-testid="verified.CS10002.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต');
			await verify.text(this.page, '[data-testid="verified.CS10001.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน');
			await verify.text(this.page, '[data-testid="verified.IC10001.verified"]', MuiTypography_body2, 'เอกสารรายได้ SA');

			// ---------- Tab หนังสือให้ความยินยอม ----------
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, '[data-testid="consents.CS10002.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, '[data-testid="consents.CS10003.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)*');
			await verify.text(this.page, '[data-testid="consents.CS10001.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*');
			await verify.text(this.page, '[data-testid="consents.CT10002.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*');

			// ---------- Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ ----------
			await this.page.locator(element.getby.subtask_car).click();

			await this.page.waitForTimeout(3000);
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.car).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เครื่องยนต์ (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เบาะคนนั่ง (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : ฝากระโปรงท้าย (เปิด) (0)', 2);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า (0)', 3);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปเฉียงหน้าขวา (0)', 4);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปเฉียงหลังซ้าย (0)', 5);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เลขไมล์ (0)', 6);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : หน้าตรง (0)', 7);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : หลังตรง (0)', 8);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').getByText(element.contains.doc_upload_selector.car_regis_book).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนรถยนต์ (0)', 1);

			// ---------- Checkbox (เอกสารรถ) ----------
			await verify.text(this.page, '[data-testid="verified.CL10012.verified"]', MuiTypography_body2, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, '[data-testid="verified.CL10014.verified"]', MuiTypography_body2, 'รูปรถ : เบาะคนนั่ง');
			await verify.text(this.page, '[data-testid="verified.CL10004.verified"]', MuiTypography_body2, 'รูปรถ : ฝากระโปรงท้าย (เปิด)');
			await verify.text(this.page, '[data-testid="verified.CL10005.verified"]', MuiTypography_body2, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า');
			await verify.text(this.page, '[data-testid="verified.CL10003.verified"]', MuiTypography_body2, 'รูปรถ : รูปเฉียงหน้าขวา');
			await verify.text(this.page, '[data-testid="verified.CL10002.verified"]', MuiTypography_body2, 'รูปรถ : รูปเฉียงหลังซ้าย');
			await verify.text(this.page, '[data-testid="verified.CL10011.verified"]', MuiTypography_body2, 'รูปรถ : เลขไมล์');
			await verify.text(this.page, '[data-testid="verified.CL10008.verified"]', MuiTypography_body2, 'รูปรถ : หน้าตรง');
			await verify.text(this.page, '[data-testid="verified.CL10009.verified"]', MuiTypography_body2, 'รูปรถ : หลังตรง');
			await verify.text(this.page, '[data-testid="verified.CL10024.verified"]', MuiTypography_body2, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)');
			await verify.text(this.page, '[data-testid="verified.CL10001.verified"]', MuiTypography_body2, 'สำเนาทะเบียนรถยนต์');

		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.form }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน (0)');

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.transport_set }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน) (0)', 2);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.contract }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน (0)');

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.customer_doc }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า  (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ (0)', 2);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น (0)', 3);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น) (0)', 4);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.other_insurance }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'เอกสารอื่นๆ (0)');

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.consent }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน (0)', 2);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.occupation_and_income_doc }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'เอกสารรายได้ SA (0)');

			// ✅ Checkbox Verification
			await verify.text(this.page, '[data-testid="verified.CT10003.verified"]', MuiTypography_body2, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, '[data-testid="verified.CL10027.verified"]', MuiTypography_body2, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)');
			await verify.text(this.page, '[data-testid="verified.CT10009.verified"]', MuiTypography_body2, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก');
			await verify.text(this.page, '[data-testid="verified.CT10010.verified"]', MuiTypography_body2, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)');
			await verify.text(this.page, '[data-testid="verified.CT10005.verified"]', MuiTypography_body2, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน');
			await verify.text(this.page, '[data-testid="verified.ID10003.verified"]', MuiTypography_body2, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)');
			await verify.text(this.page, '[data-testid="verified.ID10004.verified"]', MuiTypography_body2, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า');
			await verify.text(this.page, '[data-testid="verified.ID10002.verified"]', MuiTypography_body2, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ');
			await verify.text(this.page, '[data-testid="verified.ID10001.verified"]', MuiTypography_body2, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น');
			await verify.text(this.page, '[data-testid="verified.OT10001.verified"]', MuiTypography_body2, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)');
			await verify.text(this.page, '[data-testid="verified.CT10007.verified"]', MuiTypography_body2, 'เอกสารอื่นๆ');
			await verify.text(this.page, '[data-testid="verified.CS10003.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)');
			await verify.text(this.page, '[data-testid="verified.CS10002.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต');
			await verify.text(this.page, '[data-testid="verified.CS10001.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน');
			await verify.text(this.page, '[data-testid="verified.IC10001.verified"]', MuiTypography_body2, 'เอกสารรายได้ SA');

			// ✅ Tab หนังสือให้ความ ยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, '[data-testid="consents.CS10002.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, '[data-testid="consents.CS10003.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)*');
			await verify.text(this.page, '[data-testid="consents.CS10001.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*');
			await verify.text(this.page, '[data-testid="consents.CT10002.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*');

			// ✅ Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.car }).click();
			await this.page.waitForTimeout(3000);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เครื่องยนต์ (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เบาะคนนั่ง (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : ฝากระโปรงท้าย (เปิด) (0)', 2);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า (0)', 3);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปเฉียงหน้าขวา (0)', 4);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปเฉียงหลังซ้าย (0)', 5);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปป้ายภาษี (0)', 6);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เลขไมล์ (0)', 7);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : หน้าตรง (0)', 8);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : หลังตรง (0)', 9);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.car_regis_book }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนรถยนต์ (0)');

			// ✅ Checkbox รถ
			await verify.text(this.page, '[data-testid="verified.CL10012.verified"]', MuiTypography_body2, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, '[data-testid="verified.CL10014.verified"]', MuiTypography_body2, 'รูปรถ : เบาะคนนั่ง');
			await verify.text(this.page, '[data-testid="verified.CL10004.verified"]', MuiTypography_body2, 'รูปรถ : ฝากระโปรงท้าย (เปิด)');
			await verify.text(this.page, '[data-testid="verified.CL10005.verified"]', MuiTypography_body2, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า');
			await verify.text(this.page, '[data-testid="verified.CL10003.verified"]', MuiTypography_body2, 'รูปรถ : รูปเฉียงหน้าขวา');
			await verify.text(this.page, '[data-testid="verified.CL10002.verified"]', MuiTypography_body2, 'รูปรถ : รูปเฉียงหลังซ้าย');
			await verify.text(this.page, '[data-testid="verified.CL10011.verified"]', MuiTypography_body2, 'รูปรถ : เลขไมล์');
			await verify.text(this.page, '[data-testid="verified.CL10015.verified"]', MuiTypography_body2, 'รูปรถ : รูปป้ายภาษี');
			await verify.text(this.page, '[data-testid="verified.CL10008.verified"]', MuiTypography_body2, 'รูปรถ : หน้าตรง');
			await verify.text(this.page, '[data-testid="verified.CL10009.verified"]', MuiTypography_body2, 'รูปรถ : หลังตรง');
			await verify.text(this.page, '[data-testid="verified.CL10001.verified"]', MuiTypography_body2, 'สำเนาทะเบียนรถยนต์');
		},

		crl_bt: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.form }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน (0)');

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.transport_set }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน) (0)', 1);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.contract }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน (0)');

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.customer_doc }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า  (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ (0)', 2);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น (0)', 3);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น) (0)', 4);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.other_insurance }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'เอกสารอื่นๆ (0)');

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.consent }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA) (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน (0)', 2);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.occupation_and_income_doc }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'เอกสารรายได้ SA (0)');

			// ✅ Checkbox
			await verify.text(this.page, '[data-testid="verified.CT10003.verified"]', MuiTypography_body2, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, '[data-testid="verified.CL10027.verified"]', MuiTypography_body2, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)');
			await verify.text(this.page, '[data-testid="verified.CT10010.verified"]', MuiTypography_body2, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)');
			await verify.text(this.page, '[data-testid="verified.CT10005.verified"]', MuiTypography_body2, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน');
			await verify.text(this.page, '[data-testid="verified.ID10003.verified"]', MuiTypography_body2, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)');
			await verify.text(this.page, '[data-testid="verified.ID10004.verified"]', MuiTypography_body2, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า');
			await verify.text(this.page, '[data-testid="verified.ID10002.verified"]', MuiTypography_body2, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ');
			await verify.text(this.page, '[data-testid="verified.ID10001.verified"]', MuiTypography_body2, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น');
			await verify.text(this.page, '[data-testid="verified.OT10001.verified"]', MuiTypography_body2, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)');
			await verify.text(this.page, '[data-testid="verified.CT10007.verified"]', MuiTypography_body2, 'เอกสารอื่นๆ');
			await verify.text(this.page, '[data-testid="verified.CS10003.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)');
			await verify.text(this.page, '[data-testid="verified.CS10002.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต');
			await verify.text(this.page, '[data-testid="verified.CS10001.verified"]', MuiTypography_body2, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน');
			await verify.text(this.page, '[data-testid="verified.IC10001.verified"]', MuiTypography_body2, 'เอกสารรายได้ SA');

			// ✅ Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, '[data-testid="consents.CS10002.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, '[data-testid="consents.CS10003.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)*');
			await verify.text(this.page, '[data-testid="consents.CS10001.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*');
			await verify.text(this.page, '[data-testid="consents.CT10002.checked"]', MuiTypography_body1, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*');

			// ✅ Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(3000);
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.car }).click();
			await this.page.waitForTimeout(3000);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เครื่องยนต์ (0)');
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เบาะคนนั่ง (0)', 1);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : ฝากระโปรงท้าย (เปิด) (0)', 2);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า (0)', 3);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปเฉียงหน้าขวา (0)', 4);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปเฉียงหลังซ้าย (0)', 5);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : รูปป้ายภาษี (0)', 6);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : เลขไมล์ (0)', 7);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : หน้าตรง (0)', 8);
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'รูปรถ : หลังตรง (0)', 9);

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]', { hasText: element.contains.doc_upload_selector.car_regis_book }).click();
			await verify.text(this.page, css_9glgiu, MuiTypography_body2, 'สำเนาทะเบียนรถยนต์ (0)');

			// ✅ Checkbox
			await verify.text(this.page, '[data-testid="verified.CL10012.verified"]', MuiTypography_body2, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, '[data-testid="verified.CL10014.verified"]', MuiTypography_body2, 'รูปรถ : เบาะคนนั่ง');
			await verify.text(this.page, '[data-testid="verified.CL10004.verified"]', MuiTypography_body2, 'รูปรถ : ฝากระโปรงท้าย (เปิด)');
			await verify.text(this.page, '[data-testid="verified.CL10005.verified"]', MuiTypography_body2, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า');
			await verify.text(this.page, '[data-testid="verified.CL10003.verified"]', MuiTypography_body2, 'รูปรถ : รูปเฉียงหน้าขวา');
			await verify.text(this.page, '[data-testid="verified.CL10002.verified"]', MuiTypography_body2, 'รูปรถ : รูปเฉียงหลังซ้าย');
			await verify.text(this.page, '[data-testid="verified.CL10011.verified"]', MuiTypography_body2, 'รูปรถ : เลขไมล์');
			await verify.text(this.page, '[data-testid="verified.CL10015.verified"]', MuiTypography_body2, 'รูปรถ : รูปป้ายภาษี');
			await verify.text(this.page, '[data-testid="verified.CL10008.verified"]', MuiTypography_body2, 'รูปรถ : หน้าตรง');
			await verify.text(this.page, '[data-testid="verified.CL10009.verified"]', MuiTypography_body2, 'รูปรถ : หลังตรง');
			await verify.text(this.page, '[data-testid="verified.CL10001.verified"]', MuiTypography_body2, 'สำเนาทะเบียนรถยนต์');
		},
	};

	task_check_document_vercar_verfull = {
		c2c: async () => {
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(3000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทโอนเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจนอก', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาเช่าซื้อ (สคบ.)', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือรับรองการเช่าซื้อ', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 14);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 15);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 16);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 17);
			await this.page.waitForTimeout(3000);
			// Tab หนังสือให้ความ ยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);
			await this.page.waitForTimeout(3000);
			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},

		crl: async () => {
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(3000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 14);

			// Tab หนังสือให้ความ ยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(3000);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},

		crl_bt: async () => {
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(3000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาเช่าซื้อ (สคบ.)', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 14);

			// Tab หนังสือให้ความ ยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(3000);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},
	};

	task_check_document_ap = {
		c2c: async () => {
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทโอนเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจนอก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน', 0, 3);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(3000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 2);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(3000);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},
	};

	task_check_document_keyfull = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทโอนเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจนอก', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาเช่าซื้อ (สคบ.)', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือรับรองการเช่าซื้อ', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 14);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 15);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 16);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 17);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(10000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(3000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 14);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(3000);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},
		crl_bt: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(3000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 14);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(3000);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},
	};

	task_check_document_uws = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();

			// Checkbox
			await verify.text(this.page,
				'[data-testid="verified.CT10002.verified"]',
				MuiTypography_body2,
				'คำขอสินเชื่อประเภทโอนเล่มทะเบียน'
			);
			await verify.text(this.page,
				'[data-testid="verified.CL10027.verified"]',
				MuiTypography_body2,
				'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)'
			);
			await verify.text(this.page,
				'[data-testid="verified.CT10009.verified"]',
				MuiTypography_body2,
				'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก'
			);
			await verify.text(this.page,
				'[data-testid="verified.CT10010.verified"]',
				MuiTypography_body2,
				'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)'
			);
			await verify.text(this.page,
				'[data-testid="verified.DT10005.verified"]',
				MuiTypography_body2,
				'เอกสารตรวจนอก'
			);
			await verify.text(this.page,
				'[data-testid="verified.CT10001.verified"]',
				MuiTypography_body2,
				'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน'
			);
			await verify.text(this.page,
				'[data-testid="verified.CT10004.verified"]',
				MuiTypography_body2,
				'สัญญาเช่าซื้อ (สคบ.)'
			);
			await verify.text(this.page,
				'[data-testid="verified.ID10003.verified"]',
				MuiTypography_body2,
				'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)'
			);
			await verify.text(this.page,
				'[data-testid="verified.ID10004.verified"]',
				MuiTypography_body2,
				'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า'
			);
			await verify.text(this.page,
				'[data-testid="verified.ID10002.verified"]',
				MuiTypography_body2,
				'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ'
			);
			await verify.text(this.page,
				'[data-testid="verified.ID10001.verified"]',
				MuiTypography_body2,
				'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น'
			);
			await verify.text(this.page,
				'[data-testid="verified.OT10001.verified"]',
				MuiTypography_body2,
				'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)'
			);
			await verify.text(this.page,
				'[data-testid="verified.CT10006.verified"]',
				MuiTypography_body2,
				'หนังสือรับรองการเช่าซื้อ'
			);
			await verify.text(this.page,
				'[data-testid="verified.CS10003.verified"]',
				MuiTypography_body2,
				'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)'
			);
			await verify.text(this.page,
				'[data-testid="verified.CS10002.verified"]',
				MuiTypography_body2,
				'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต'
			);
			await verify.text(this.page,
				'[data-testid="verified.CS10001.verified"]',
				MuiTypography_body2,
				'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน'
			);
			await verify.text(this.page,
				'[data-testid="verified.CO10001.verified"]',
				MuiTypography_body2,
				'เอกสารตรวจบ้าน/กิจการ'
			);
			await verify.text(this.page,
				'[data-testid="verified.CO10002.verified"]',
				MuiTypography_body2,
				'เอกสารอื่นๆ'
			);
			await verify.text(this.page,
				'[data-testid="verified.IC10001.verified"]',
				MuiTypography_body2,
				'เอกสารรายได้ SA'
			);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page,
				'[data-testid="consents.CS10002.checked"]',
				MuiTypography_body1,
				'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *'
			);
			await verify.text(this.page,
				'[data-testid="consents.CS10003.checked"]',
				MuiTypography_body1,
				'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)*'
			);
			await verify.text(this.page,
				'[data-testid="consents.CS10001.checked"]',
				MuiTypography_body1,
				'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*'
			);
			await verify.text(this.page,
				'[data-testid="consents.CT10002.checked"]',
				MuiTypography_body1,
				'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*'
			);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);

			// Checkbox
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : เครื่องยนต์'
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : เบาะคนนั่ง',
				0,
				1
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : ฝากระโปรงท้าย (เปิด)',
				0,
				2
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า',
				0,
				3
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : รูปเฉียงหน้าขวา',
				0,
				4
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : รูปเฉียงหลังซ้าย',
				0,
				5
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : เลขไมล์',
				0,
				6
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : หน้าตรง',
				0,
				7
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : หลังตรง',
				0,
				8
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)',
				0,
				9
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'สำเนาทะเบียนรถยนต์',
				0,
				10
			);
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(3000);
			// Checkbox
			await verify.text(this.page,
				'[data-testid="verified.CT10003.verified"]',
				MuiTypography_body2,
				'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน'
			);
			await verify.text(this.page,
				'[data-testid="verified.CL10027.verified"]',
				MuiTypography_body2,
				'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)'
			);
			// await verify.text(this.page,
			// 	'[data-testid="verified.CT10009.verified"]',
			// 	MuiTypography_body2,
			// 	'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก'
			// );
			await verify.text(this.page,
				'[data-testid="verified.CT10010.verified"]',
				MuiTypography_body2,
				'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)'
			);
			await verify.text(this.page,
				'[data-testid="verified.CT10005.verified"]',
				MuiTypography_body2,
				'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน'
			);
			await verify.text(this.page,
				'[data-testid="verified.ID10003.verified"]',
				MuiTypography_body2,
				'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)'
			);
			await verify.text(this.page,
				'[data-testid="verified.ID10004.verified"]',
				MuiTypography_body2,
				'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า'
			);
			await verify.text(this.page,
				'[data-testid="verified.ID10002.verified"]',
				MuiTypography_body2,
				'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ'
			);
			await verify.text(this.page,
				'[data-testid="verified.ID10001.verified"]',
				MuiTypography_body2,
				'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น'
			);
			await verify.text(this.page,
				'[data-testid="verified.OT10001.verified"]',
				MuiTypography_body2,
				'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)'
			);
			await verify.text(this.page,
				'[data-testid="verified.CS10003.verified"]',
				MuiTypography_body2,
				'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)'
			);
			await verify.text(this.page,
				'[data-testid="verified.CS10002.verified"]',
				MuiTypography_body2,
				'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต'
			);
			await verify.text(this.page,
				'[data-testid="verified.CS10001.verified"]',
				MuiTypography_body2,
				'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน'
			);
			await verify.text(this.page,
				'[data-testid="verified.CO10001.verified"]',
				MuiTypography_body2,
				'เอกสารตรวจบ้าน/กิจการ'
			);
			await verify.text(this.page,
				'[data-testid="verified.CO10002.verified"]',
				MuiTypography_body2,
				'เอกสารอื่นๆ'
			);
			await verify.text(this.page,
				'[data-testid="verified.IC10001.verified"]',
				MuiTypography_body2,
				'เอกสารรายได้ SA'
			);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page,
				'[data-testid="consents.CS10002.checked"]',
				MuiTypography_body1,
				'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *'
			);
			await verify.text(this.page,
				'[data-testid="consents.CS10003.checked"]',
				MuiTypography_body1,
				'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)*'
			);
			await verify.text(this.page,
				'[data-testid="consents.CS10001.checked"]',
				MuiTypography_body1,
				'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*'
			);
			await verify.text(this.page,
				'[data-testid="consents.CT10002.checked"]',
				MuiTypography_body1,
				'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*'
			);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(3000);
			// Checkbox
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : เครื่องยนต์'
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : เบาะคนนั่ง',
				0,
				1
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : ฝากระโปรงท้าย (เปิด)',
				0,
				2
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า',
				0,
				3
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : รูปเฉียงหน้าขวา',
				0,
				4
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : รูปเฉียงหลังซ้าย',
				0,
				5
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : รูปป้ายภาษี',
				0,
				6
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : เลขไมล์',
				0,
				7
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : หน้าตรง',
				0,
				8
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'รูปรถ : หลังตรง',
				0,
				9
			);
			await verify.text(this.page,
				app_keyin,
				MuiTypography_root_MuiTypography_body2_css_a1if02,
				'สำเนาทะเบียนรถยนต์',
				0,
				10
			);
		},
	};

	task_check_document_uwv_uwa = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทโอนเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจนอก', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาเช่าซื้อ (สคบ.)', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือรับรองการเช่าซื้อ', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 14);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 15);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจบ้าน/กิจการ', 0, 16);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 17);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 18);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจบ้าน/กิจการ', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 14);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 15);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},
		crl_bt: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาเช่าซื้อ (สคบ.)', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารรายได้ SA', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 14);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},
	};

	task_check_document_bo1 = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทโอนเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจนอก', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาเช่าซื้อ (สคบ.)', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือรับรองการเช่าซื้อ', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 14);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 15);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 16);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},

		c2c_bt: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทโอนเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจนอก', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อโอนเล่มทะเบียน', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาเช่าซื้อ (สคบ.)', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือรับรองการเช่าซื้อ', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 14);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 15);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารใบ Pay-in', 0, 16);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 17);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'แบบคำขอโอนและรับโอนของกรมการขนส่งทางบก', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 13);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},
		crl_bt: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'คำขอสินเชื่อประเภทจำนำเล่มทะเบียน');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'บันทึกรับทราบ การนำรถยนต์นั่งส่วนบุคคลเกินเจ็ดคนไปใช้งาน (กรณีรถตู้)', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือมอบอำนาจ(ประกบแบบคำขอโอนและรับโอน)', 0, 2);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาชื้อขายรถยนต์ สำหรับสินเชื่อจำนำเล่มทะเบียน', 0, 3);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สัญญาเช่าซื้อ (สคบ.)', 0, 4);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนบ้าน (เฉพาะกรณีใช้สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ)', 0, 5);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนพาณิชย์ หรือ \nสำเนาทะเบียนการค้า', 0, 6);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรข้าราชการ/รัฐวิสาหกิจ', 0, 7);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาบัตรบัตรประชาชน เฉพาะด้านหน้าบัตรเท่านั้น', 0, 8);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาหน้าสมุดบัญชีธนาคารของลูกค้า ที่ต้องการให้โอนเงินเข้า (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)', 0, 9);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 10);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมในการนำข้อมูลจาก NCB มาใช้จัดทำแบบจำลองด้านเครดิต', 0, 11);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)  และบัตรประชาชน', 0, 12);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารใบ Pay-in', 0, 13);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 14);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เครื่องยนต์');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เบาะคนนั่ง', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปป้ายภาษี', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 8);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 9);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 10);
		},
	};

	task_check_document_bo2 = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจนอก');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 1);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 8);
		},

		c2c_bt: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารตรวจนอก');
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารใบ Pay-in', 0, 1);
			await verify.text(this.page, tabpanel_0, MuiTypography_root_MuiTypography_body2_css_a1if02, 'เอกสารอื่นๆ', 0, 2);

			// Tab หนังสือให้ความยินยอม
			await this.page.locator(element.getby.tab_consent_letter).click();
			await this.page.waitForTimeout(5000);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *');
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)', 0, 1);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*', 0, 2);
			await verify.text(this.page, tabpanel_1, MuiTypography_root_MuiTypography_body1_css_10xxmbz, 'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*', 0, 3);

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.waitForTimeout(5000);
			// Checkbox
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : ฝากระโปรงท้าย (เปิด)');
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปคอนโซล เกียร์ พวงมาลัย แผงประตูและเบาะหน้า', 0, 1);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหน้าขวา', 0, 2);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : รูปเฉียงหลังซ้าย', 0, 3);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : เลขไมล์', 0, 4);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หน้าตรง', 0, 5);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'รูปรถ : หลังตรง', 0, 6);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาคัดต้นเล่มทะเบียนรถ (กรณีเล่มชำรุด , สูญหาย และ ทะเบียนระงับ)', 0, 7);
			await verify.text(this.page, app_keyin, MuiTypography_root_MuiTypography_body2_css_a1if02, 'สำเนาทะเบียนรถยนต์', 0, 8);
		},
	};

	async task_prescreen_0() {
		await this.page.locator(element.getby.subtask_prescreen0_borrower_info).click();
		await this.page.locator(`text=${element.contains.tab_borrower_step1}`).click();
		await this.page.waitForTimeout(5000);
		await verify.text(this.page,
			'.css-nm14zd',
			MuiTypography_body1,
			'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *'
		);
		await verify.text(this.page,
			'.css-nm14zd',
			MuiTypography_body1,
			'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)',
			1
		);
		await verify.text(this.page,
			'.css-13elx3p',
			MuiTypography_body2,
			'1. ท่านยินยอมให้บริษัทฯ เก็บรวบรวม ใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน เพื่อวิเคราะห์ วิจัย ทำสถิติ พัฒนาและจัดทำแบบจำลอง พัฒนาและปรับปรุงผลิตภัณฑ์ และ/หรือบริการ รวมถึง กลุ่มธุรกิจทางการเงินของธนาคารกสิกรไทย และพันธมิตรทางธุรกิจของบริษัทฯ เพื่อให้ท่านได้รับบริการที่เหมาะสมมากยิ่งขึ้น*'
		);
		await verify.text(this.page,
			'.css-13elx3p',
			MuiTypography_body2,
			'2. ท่านยินยอมให้บริษัทฯ เปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่ กลุ่มธุรกิจทางการเงินของธนาคารกสิกรไทย และพันธมิตรทางธุรกิจของบริษัทฯ เพื่อให้ท่านไม่พลาดโอกาสรับข้อเสนอผลิตภัณฑ์หรือบริการ สิทธิพิเศษในการเข้าร่วมกิจกรรม รวมถึงข่าวสาร คำแนะนำที่เป็นประโยชน์และโปรโมชันที่คัดสรรอย่างเหมาะสมจากบริษัทดังกล่าว*',
			1
		);
		await verify.text(this.page,
			'.css-13elx3p',
			MuiTypography_body2,
			'3. ท่านยินยอมให้บริษัทฯ เก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของท่าน เพื่อให้ท่านไม่พลาดโอกาสรับข้อเสนอผลิตภัณฑ์ และ/หรือบริการ สิทธิพิเศษในการเข้าร่วมกิจกรรมที่บริษัทฯ จัดขึ้น รวมถึงข่าวสาร คำแนะนำที่เป็นประโยชน์ และโปรโมชันที่คัดสรรอย่างเหมาะสม*',
			2
		);
		await verify.text(this.page,
			'.css-nm14zd',
			MuiTypography_body1,
			'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*',
			2
		);
		await verify.text(this.page,
			'.css-nm14zd',
			MuiTypography_body1,
			'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*',
			3
		);
	}

	async task_keyfull() {
		await this.page.locator(element.getby.task_keyfullborrower).click();
		await this.page.waitForTimeout(7000);
		await this.page.locator('[role="tab"]').getByText('ตรวจสอบข้อมูลลูกค้าเดิม').click();
		await this.page.waitForTimeout(3000);
		await verify.text(this.page,
			'.css-nm14zd',
			MuiTypography_body1,
			'หนังสือให้ความยินยอมแก่สมาชิกในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิตมาใช้จัดทำแบบจำลองด้านเครดิต *'
		);
		await verify.text(this.page,
			'.css-nm14zd',
			MuiTypography_body1,
			'หนังสือให้ความยินยอมในการเก็บรวบรวม ใช้ และ เปิดเผยข้อมูล (PDPA)',
			1
		);
		await verify.text(this.page,
			'.css-13elx3p',
			MuiTypography_body2,
			'1. ท่านยินยอมให้บริษัทฯ เก็บรวบรวม ใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน เพื่อวิเคราะห์ วิจัย ทำสถิติ พัฒนาและจัดทำแบบจำลอง พัฒนาและปรับปรุงผลิตภัณฑ์ และ/หรือบริการ รวมถึง กลุ่มธุรกิจทางการเงินของธนาคารกสิกรไทย และพันธมิตรทางธุรกิจของบริษัทฯ เพื่อให้ท่านได้รับบริการที่เหมาะสมมากยิ่งขึ้น*'
		);
		await verify.text(this.page,
			'.css-13elx3p',
			MuiTypography_body2,
			'2. ท่านยินยอมให้บริษัทฯ เปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่ กลุ่มธุรกิจทางการเงินของธนาคารกสิกรไทย และพันธมิตรทางธุรกิจของบริษัทฯ เพื่อให้ท่านไม่พลาดโอกาสรับข้อเสนอผลิตภัณฑ์หรือบริการ สิทธิพิเศษในการเข้าร่วมกิจกรรม รวมถึงข่าวสาร คำแนะนำที่เป็นประโยชน์และโปรโมชันที่คัดสรรอย่างเหมาะสมจากบริษัทดังกล่าว*',
			1
		);
		await verify.text(this.page,
			'.css-13elx3p',
			MuiTypography_body2,
			'3. ท่านยินยอมให้บริษัทฯ เก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของท่าน เพื่อให้ท่านไม่พลาดโอกาสรับข้อเสนอผลิตภัณฑ์ และ/หรือบริการ สิทธิพิเศษในการเข้าร่วมกิจกรรมที่บริษัทฯ จัดขึ้น รวมถึงข่าวสาร คำแนะนำที่เป็นประโยชน์ และโปรโมชันที่คัดสรรอย่างเหมาะสม*',
			2
		);
		await verify.text(this.page,
			'.css-nm14zd',
			MuiTypography_body1,
			'หนังสือให้ความยินยอมเปิดเผยข้อมูลทางโทรสาร (NCB)*',
			2
		);
		await verify.text(this.page,
			'.css-nm14zd',
			MuiTypography_body1,
			'หนังสือให้ความยินยอมให้ธนาคารใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลให้แก่ เงินให้ใจ กลุ่มธุรกิจทางการเงินของ บมจ. ธนาคารกสิกรไทย\n*',
			3
		);
	}
}

export class VerifyImageNameOnTask {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	task_check_document_vercar_keyfull_verfull = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=ใบคำขอ').first().waitFor({ state: 'visible' });
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.form}`)
				.click();
			for (let i = 0; i < data.image.c2c.form_00.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.form_00[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.transport_set}`)
				.click();
			for (let i = 0; i < data.image.c2c.transport_set_01.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.transport_set_01[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.contract}`)
				.click();
			for (let i = 0; i < data.image.c2c.contract_02.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.contract_02[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.customer_doc}`)
				.click();
			for (let i = 0; i < data.image.c2c.customer_doc_03.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.customer_doc_03[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.other_insurance}`)
				.click();
			for (let i = 0; i < data.image.c2c.other_insurance_04.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.other_insurance_04[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.consent}`)
				.click();
			for (let i = 0; i < data.image.c2c.consent_05.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.consent_05[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.occupation_and_income_doc}`)
				.click();
			for (let i = 0; i < data.image.c2c.occupation_and_income_doc_06.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.occupation_and_income_doc_06[i],
					0,
					i
				);
			}

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();

			// await this.page.locator(element.getby.doc_upload_selector).click();
			// await this.page.locator('[role="option"]')
			// 	.locator(`text=${element.contains.doc_upload_selector.car}`)
			// 	.click();
			// for (let i = 0; i < data.image.c2c.car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			// await this.page.locator(element.getby.doc_upload_selector).click();
			// await this.page.locator('[role="option"]')
			// 	.locator(`text=${element.contains.doc_upload_selector.car_regis_book}`)
			// 	.click();
			// for (let i = 0; i < data.image.c2c.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=ใบคำขอ').first().waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.form}`)
				.click();
			for (let i = 0; i < data.image.crl.form_00.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.form_00[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.transport_set}`)
				.click();
			for (let i = 0; i < data.image.crl.transport_set_01.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.transport_set_01[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.contract}`)
				.click();
			for (let i = 0; i < data.image.crl.contract_02.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.contract_02[i],
					0,
					i
				);
			}

			// ทำซ้ำแบบเดียวกันกับ customer_doc, other_insurance, consent, occupation_and_income_doc

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			// await this.page.locator('text=รูปรถ').waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.car}`)
				.click();
			// for (let i = 0; i < data.image.crl.car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.crl.car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]')
				.locator(`text=${element.contains.doc_upload_selector.car_regis_book}`)
				.click();
			// for (let i = 0; i < data.image.crl.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.crl.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},

	};

	task_check_document_ap = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			// await this.page.locator(element.getby.subtask_document_borrower).click();

			// await this.page.locator(element.getby.doc_upload_selector).click();
			// await this.page.locator('[role="option"]')
			// 	.locator(`text=${element.contains.doc_upload_selector.form}`)
			// 	.click();
			// for (let i = 0; i < data.image.c2c.form_00.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.form_00[i],
			// 		0,
			// 		i
			// 	);
			// }

			// await this.page.locator(element.getby.doc_upload_selector).click();
			// await this.page.locator('[role="option"]')
			// 	.locator(`text=${element.contains.doc_upload_selector.transport_set}`)
			// 	.click();
			// const transport_set_01_ap = [
			// 	'data-file/01_transfer_acknowledge.png',
			// 	'data-file/01_outside_inspection_doc.png',
			// ];
			// for (let i = 0; i < transport_set_01_ap.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		transport_set_01_ap[i],
			// 		0,
			// 		i
			// 	);
			// }

			// await this.page.locator(element.getby.doc_upload_selector).click();
			// await this.page.locator('[role="option"]')
			// 	.locator(`text=${element.contains.doc_upload_selector.contract}`)
			// 	.click();
			// const contract_02 = ['data-file/02_transfer_contract.png'];
			// for (let i = 0; i < contract_02.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		contract_02[i],
			// 		0,
			// 		i
			// 	);
			// }

			// // Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			// await this.page.locator(element.getby.subtask_car).click();
			// // await this.page.locator('text=รูปรถ').waitFor({ state: 'visible' });

			// await this.page.locator(element.getby.doc_upload_selector).click();
			// await this.page.locator('[role="option"]')
			// 	.locator(`text=${element.contains.doc_upload_selector.car}`)
			// 	.click();
			// for (let i = 0; i < data.image.c2c.car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			// await this.page.locator(element.getby.doc_upload_selector).click();
			// await this.page.locator('[role="option"]')
			// 	.locator(`text=${element.contains.doc_upload_selector.car_regis_book}`)
			// 	.click();
			// for (let i = 0; i < data.image.c2c.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=รายการเอกสาร').first().waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.form}`).click();
			for (let i = 0; i < data.image.crl.form_00.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.form_00[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.transport_set}`).click();
			const transport_set_01_ap = ['data-file/01_transfer_acknowledge.png'];
			for (let i = 0; i < transport_set_01_ap.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					transport_set_01_ap[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.contract}`).click();
			const contract_02 = ['data-file/02_pledge_contract.png'];
			for (let i = 0; i < contract_02.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					contract_02[i],
					0,
					i
				);
			}

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			// await this.page.locator('text=รูปรถ').waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car}`).click();
			// for (let i = 0; i < data.image.crl.car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.crl.car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car_regis_book}`).click();
			// for (let i = 0; i < data.image.crl.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.crl.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},

	};

	task_check_document_uws_uwv_uwa = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=ใบคำขอ').first().waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.form}`).click();
			for (let i = 0; i < data.image.c2c.form_00.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.form_00[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.transport_set}`).click();
			for (let i = 0; i < data.image.c2c.transport_set_01.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.transport_set_01[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.contract}`).click();
			for (let i = 0; i < data.image.c2c.contract_02.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.contract_02[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.customer_doc}`).click();
			for (let i = 0; i < data.image.c2c.customer_doc_03.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.customer_doc_03[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.other_insurance}`).click();
			const other_insurance_04 = ['data-file/04_insurance_cert.png'];
			for (let i = 0; i < other_insurance_04.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					other_insurance_04[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.consent}`).click();
			for (let i = 0; i < data.image.c2c.consent_05.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.consent_05[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.occupation_and_income_doc}`).click();
			for (let i = 0; i < data.image.c2c.occupation_and_income_doc_06.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.occupation_and_income_doc_06[i],
					0,
					i
				);
			}

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			// await this.page.locator('text=รูปรถ').waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car}`).click();
			// for (let i = 0; i < data.image.c2c.car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car_regis_book}`).click();
			// for (let i = 0; i < data.image.c2c.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=ใบคำขอ').first().waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.form}`).click();
			for (let i = 0; i < data.image.crl.form_00.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.form_00[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.transport_set}`).click();
			for (let i = 0; i < data.image.crl.transport_set_01.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.transport_set_01[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.contract}`).click();
			for (let i = 0; i < data.image.crl.contract_02.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.contract_02[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.customer_doc}`).click();
			for (let i = 0; i < data.image.crl.customer_doc_03.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.customer_doc_03[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.consent}`).click();
			for (let i = 0; i < data.image.crl.consent_05.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.consent_05[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.occupation_and_income_doc}`).click();
			for (let i = 0; i < data.image.crl.occupation_and_income_doc_06.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.occupation_and_income_doc_06[i],
					0,
					i
				);
			}

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car}`).click();
			// for (let i = 0; i < data.image.crl.car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.crl.car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car_regis_book}`).click();
			// for (let i = 0; i < data.image.crl.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.crl.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},
	};

	task_check_document_bo1 = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=ใบคำขอ').first().waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.form}`).click();
			for (let i = 0; i < data.image.c2c.form_00.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.form_00[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.transport_set}`).click();
			for (let i = 0; i < data.image.c2c.transport_set_01.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.transport_set_01[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.contract}`).click();
			for (let i = 0; i < data.image.c2c.contract_02.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.contract_02[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.customer_doc}`).click();
			for (let i = 0; i < data.image.c2c.customer_doc_03.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.customer_doc_03[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.other_insurance}`).click();
			const other_insurance_04 = ['data-file/04_insurance_cert.png'];
			for (let i = 0; i < other_insurance_04.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					other_insurance_04[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.consent}`).click();
			for (let i = 0; i < data.image.c2c.consent_05.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.c2c.consent_05[i],
					0,
					i
				);
			}

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car}`).click();
			// for (let i = 0; i < data.image.c2c.car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car_regis_book}`).click();
			// for (let i = 0; i < data.image.c2c.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=ใบคำขอ').first().waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.form}`).click();
			for (let i = 0; i < data.image.crl.form_00.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.form_00[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.transport_set}`).click();
			for (let i = 0; i < data.image.crl.transport_set_01.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.transport_set_01[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.contract}`).click();
			for (let i = 0; i < data.image.crl.contract_02.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.contract_02[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.customer_doc}`).click();
			for (let i = 0; i < data.image.crl.customer_doc_03.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.customer_doc_03[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.consent}`).click();
			for (let i = 0; i < data.image.crl.consent_05.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.consent_05[i],
					0,
					i
				);
			}

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			// await this.page.locator('text=รูปรถ').waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car}`).click();
			// for (let i = 0; i < data.image.crl.car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.crl.car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car_regis_book}`).click();
			// for (let i = 0; i < data.image.crl.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.crl.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},
	};

	task_check_document_bo2 = {
		c2c: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=ชุดโอนขนส่ง').first().waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.transport_set}`).click();

			const transport_set_01 = ['data-file/01_outside_inspection_doc.png'];
			for (let i = 0; i < transport_set_01.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					transport_set_01[i],
					0,
					i
				);
			}

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			// await this.page.locator('text=รูปรถ').waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car}`).click();

			const car_07 = [
				'data-file/07_car_trunk_open.png',
				'data-file/07_car_console_gear_steering.png',
				'data-file/07_car_front_right_angle.png',
				'data-file/07_car_front_left_angle.png',
				'data-file/07_car_odometer.png',
				'data-file/07_car_front_view.png',
				'data-file/07_car_rear_view.png',
			];
			// for (let i = 0; i < car_07.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		car_07[i],
			// 		0,
			// 		i
			// 	);
			// }

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car_regis_book}`).click();
			// for (let i = 0; i < data.image.c2c.car_regis_book_08.length; i++) {
			// 	await verify.imageName(
			// 		this.page,
			// 		'[data-id="app-content"]',
			// 		'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
			// 		data.image.c2c.car_regis_book_08[i],
			// 		0,
			// 		i
			// 	);
			// }
		},

		crl: async () => {
			// Task : ตรวจสอบเอกสาร - Sub task : ผู้กู้
			await this.page.locator(element.getby.subtask_document_borrower).click();
			await this.page.locator('text=ใบคำขอ').first().waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.form}`).click();

			for (let i = 0; i < data.image.crl.form_00.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.form_00[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.transport_set}`).click();

			for (let i = 0; i < data.image.crl.transport_set_01.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.transport_set_01[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.contract}`).click();

			for (let i = 0; i < data.image.crl.contract_02.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.contract_02[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.customer_doc}`).click();

			for (let i = 0; i < data.image.crl.customer_doc_03.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.customer_doc_03[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.consent}`).click();

			for (let i = 0; i < data.image.crl.consent_05.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.consent_05[i],
					0,
					i
				);
			}

			// Task : ตรวจสอบเอกสาร - Sub task : เอกสารรถ
			await this.page.locator(element.getby.subtask_car).click();
			// await this.page.locator('text=รูปรถ').waitFor({ state: 'visible' });

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car}`).click();

			for (let i = 0; i < data.image.crl.car_07.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.car_07[i],
					0,
					i
				);
			}

			await this.page.locator(element.getby.doc_upload_selector).click();
			await this.page.locator('[role="option"]').locator(`text=${element.contains.doc_upload_selector.car_regis_book}`).click();

			for (let i = 0; i < data.image.crl.car_regis_book_08.length; i++) {
				await verify.imageName(
					this.page,
					'[data-id="app-content"]',
					'[class="MuiTypography-root MuiTypography-caption css-14ywm8a"]',
					data.image.crl.car_regis_book_08[i],
					0,
					i
				);
			}
		},
	};

}

