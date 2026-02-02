// 🔹 Core
import { expect, Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

// 🔹 Keywords & Utils  
import { random4Digits, random4Chars } from '../Keyword/CommonKeyword';

// 🔹 Pages
import { ConsentPage } from '../Page/ConsentPage/ConsentPage';
import { Auth } from '../Common/AuthenticationFunction';

// 🔹 Locator
import { locator } from '../Locator/PageLocator';

// 🔹 Data
import { expectedTableBlueBookEN, expectedTableBlueBookTH, expectTableHprPrintHistoryEN, expectTableHprPrintHistoryTH, expectTableFlagMessageHistoryEN, expectTableFlagMessageHistoryTH, expectTableCarUpdateHistoryEN, expectTableCarUpdateHistoryTH } from '../Data/CommonData';
import { JSONFile } from '../Keyword/CommonFileKeyword';


// option for checking in case
export let fileNames: any;
export let timeout: number = 1;
export let key: any;
export let currentMockData: any;
export let mock_data: any;
export let functions: any;

// 🔹 Functions
export let Add: any;
export let Edit: any;
export let Filter: any;


export let Role: string;
export let Channel: string;


const usernameADMIN = process.env.LMS_userADMIN as string;
const usernameCALL = process.env.LMS_userCALL as string;
const usernamePI = process.env.LMS_userPI as string;
const usernameDPO = process.env.LMS_userDPO as string;
const password = process.env.LMS_pwd as string;

export class FeatureHelper {
	Features: any;
	MAIN_URL: any;
	SUP_URL: any;
	ENV: any;


	constructor(private page: Page) { }


	async Login_Consent_Management() {
		console.log('Login_Consent_Management');
		await this.page.locator(locator.username).fill(usernameADMIN);
		await this.page.locator(locator.password).fill(password);
		await this.page.locator(locator.submit).click();
		await this.page.waitForTimeout(3000);
	}

	async Set_goto_LMS_Back_Office() {
		console.log('-------------------------');
		console.log('✅ Set_goto_LMS_Back_Office');
		console.log('-------------------------');
		await this.page.goto(this.MAIN_URL);
	}

	async Login_Admin() {
		console.log('-------------------------');
		console.log('✅ Login_Admin');
		console.log('-------------------------');
		await this.Set_goto_LMS_Back_Office();
		await Auth.AuthenticationFunctionAdmin(this.page);
	}

	async Login_PI() {
		console.log('-------------------------');
		console.log('✅ Login_PI');
		console.log('-------------------------');
		await this.Set_goto_LMS_Back_Office();
		await Auth.AuthenticationFunctionPI(this.page);
	}

	async Login_Call() {
		console.log('-------------------------');
		console.log('✅ Login_Callcenter');
		console.log('-------------------------');
		await this.Set_goto_LMS_Back_Office();
		await Auth.AuthenticationFunctionCallcenter(this.page);
	}

	async Login_DPO() {
		console.log('-------------------------');
		console.log('✅ Login_DPO');
		console.log('-------------------------');
		await this.Set_goto_LMS_Back_Office();
		await Auth.AuthenticationFunctionDPO(this.page);
	}

	async LoadLocalStorage() {
		let localStorage: any = await this.Read_Json_Data('LocalStorage/LocalStorage.json');
		if (localStorage === undefined || localStorage === null) {
			return;
		}
		return localStorage;
	}

	async Read_Json_Data(fileName: string) {
		const data = await JSONFile.readAndParseJson(fileName);
		return data;
	}

	async Mockdata(ENVS: string, MAIN_URL: string, fileName: string, functions: string) {

		let filepath = await this.Read_Json_Data('config.json');
		this.ENV = ENVS;
		this.MAIN_URL = MAIN_URL;
		fileNames = fileName;


		console.log('--------------------- init data ------------------');
		console.log(`🌐 ENV: ${this.ENV}`);
		console.log(`🌐 Consent URL: ${this.MAIN_URL}`);
		console.log(`✅ file Names: ${fileNames}`);
		console.log(`✅ functions: ${functions}`);

		key = `${fileNames}`;
		console.log(`✅ mapkey : ${key}`);

		let map: any = {
			'add-consent_form': filepath.add_consent_form,
			'edit-consent_form': filepath.edit_consent_form,

			'add-consent_versioning': filepath.add_consent_versioning,
			'edit-consent_versioning': filepath.edit_consent_versioning,

			'add-channels': filepath.add_channel,
			'edit-channels': filepath.edit_channel,

			'add-receiver_type': filepath.add_receiver_type,
			'edit-receiver_type': filepath.edit_receiver_type,

			'add-action_companies': filepath.add_action_companies,
			'edit-action_companies': filepath.edit_action_companies,

		};

		const selectedPath = map[key];
		console.log(`✅ Path json: ` + selectedPath)

		if (selectedPath) {
			await this.Set_data_init(selectedPath);
		} else {
			console.log(`❌ Current mock data : Unknown configuration: ${key}`);
		}

	}

	async Set_data_init(fileName: string) {
		console.log('-------------------------');
		console.log('✅ Set_data_init');
		console.log('-------------------------');

		mock_data = await this.Read_Json_Data(fileName);
		Add = mock_data.add
		Edit = mock_data.edit
		Filter = mock_data.filter

	}

	async Change_to_Language(language: string) {

		await this.page.locator(locator.setting).click();
		if (language == 'Thai') {
			console.log('เลือกภาษา: Thai');
			await this.page.locator('//span[text()="Thai"]').click();
		} else {
			await this.page.locator('//span[text()="English"]').click();
			console.log('เลือกภาษา: English');
		}
		await this.page.locator(locator.closed).click();
	}

	async Select_Role() {
		console.log('Select_Role');
		await this.page.locator("//button[@id='role_select']").click();
		await this.page.locator(`//li[@role='option']//span[text()='${Role}']`).click();
		await this.page.locator("//button[@id='channel-select']").click();
		await this.page.locator(`//li[@role='option']//span[text()='${Channel}']`).click();
		await this.page.locator("//button[@type='submit']").click();
	}

	async Select_Menu_Consent_Configuration() {
		console.log('---------------------------------');
		console.log('Select_Menu_Consent_Configuration');
		console.log('---------------------------------');
		await this.page.locator(locator.form.menuForm).click();
		await this.page.waitForTimeout(1000);
		await this.page.locator(locator.form.subMenuForm).click();
		await this.page.waitForTimeout(1000);
	}

	async Create_Consent_Form() {
		console.log('---------------------------------');
		console.log('Create_Consent_Form');
		console.log('---------------------------------');

		await this.Select_Menu_Consent_Configuration();

		const consentPage = await ConsentPage(this.page);
		const ramdom = random4Digits();

		await this.page.locator(locator.form.btnCreForm).click();
		await this.page.waitForTimeout(1000);

		await consentPage.formNo(`${Add.Form_no}_${ramdom}`);
		const formNo = await this.page.locator(locator.form.form_no).inputValue();

		await consentPage.formName(`${Add.Consent_form_name}_${ramdom}`);
		const formName = await this.page.locator(locator.form.form_name).inputValue();

		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			formNo: formNo,
			formName: formName,
		});

		await this.page.locator(locator.form.description).fill(Add.Description);
		await this.page.locator(locator.form.category).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Add.Consent_category}']`).click();

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.locator(locator.form.data_control).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Add.Data_controller}']`).click();

		await this.page.locator(locator.form.consent_type).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Add.Consent_type}']`).click();
		await this.page.waitForTimeout(500);

		const button = this.page.locator(locator.form.product_level);
		await button.scrollIntoViewIfNeeded();
		await button.click();

		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Add.Product_level}']`).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(locator.form.legal_base).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Add.Legal_base}']`).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//div[@id='receiver_type_id']//input[@aria-label='${Add.Receiver_type}']`).check();
		await this.page.locator(`//div[@id='action_company_id']//input[@aria-label='${Add.Action_company}']`).check();

		await this.page.locator(locator.submit).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(locator.btnOK).click();

		await this.page.waitForTimeout(3000);

	}

	async Update_Consent_Form() {
		await this.Create_Consent_Form();
		await this.Search_Consent_Form();
		const statusForm = await this.page.locator(`//div[@id='status-name']`).textContent();

		if (statusForm == 'DRAFT') {
			await this.page.locator("//button[@id='btn-update-form']").click();
			console.log('---------------------------------');
			console.log('Update_Consent_Form');
			console.log('---------------------------------');
		} else {
			throw new Error(`ไม่สามารถแก้ไขได้เพราะไม่ใช่สถานะ DRAFT แต่เป็นสถานะ: ${statusForm}`);
		};

		await this.page.waitForTimeout(2000);
		const ramdom = random4Digits();

		await this.page.locator("//input[@id='consent_form_name']").fill(`${Edit.Consent_form_name}_${ramdom}`);
		const formName = await this.page.locator("//input[@id='consent_form_name']").inputValue();

		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			formName: formName,
		});

		await this.page.locator("//textarea[@id='description']").fill(Edit.Description);
		await this.page.locator("//button[@id='consent_category']").click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Edit.Consent_category}']`).click();
		await this.page.locator("//button[@id='data_control']").click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Edit.Data_controller}']`).click();
		await this.page.locator("//button[@id='consent_type']").click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Edit.Consent_type}']`).click();
		await this.page.waitForTimeout(500);

		const button = this.page.locator("//button[@id='product_level']");
		await button.scrollIntoViewIfNeeded();
		await button.click();

		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Edit.Product_level}']`).click();
		await this.page.waitForTimeout(500);
		await this.page.locator("//button[@id='legal_base']").click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//li[@role='option']//span[text()='${Edit.Legal_base}']`).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(`//div[@id='receiver_type_id']//input[@aria-label='${Edit.Receiver_type}']`).check();
		await this.page.locator(`//div[@id='action_company_id']//input[@aria-label='${Edit.Action_company}']`).check();
		await this.page.locator("//button[@id='submit-button']").click();
		await this.page.waitForTimeout(500);
		await this.page.locator("//button[@id='on-submit-button']").click();
		await this.page.waitForTimeout(3000);

	}

	async View_Consent_Form(functions: string) {
		console.log('---------------------------------');
		console.log('View_Consent_Form');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.locator("//button[@id='btn-view-form']").click();
		await this.page.waitForTimeout(1000);

		// เก็บฟิวส์จากหน้า view ทั้งหมด
		const formNo = await this.page.locator("//input[@id='form_no']").inputValue();
		const formName = await this.page.locator("//input[@id='consent_form_name']").inputValue();
		const description = await this.page.locator("//textarea[@id='description']").inputValue();
		const consentCategory = await this.page.locator("//button[@id='consent_category']//span").innerText();
		const dataControl = await this.page.locator("//button[@id='data_control']//span").innerText();
		const consentType = await this.page.locator("//button[@id='consent_type']//span").innerText();
		const productLevel = await this.page.locator("//button[@id='product_level']//span").innerText();
		const legalBase = await this.page.locator("//button[@id='legal_base']//span").innerText();

		// ใส่เงื่อนไขเช็คว่าเป็น add หรือ edit 
		if (functions == 'add') {
			console.log('---------------------------------');
			console.log('Verify Create Data');
			console.log('---------------------------------');

			const receiverType = await this.page.locator(`//div[@id='receiver_type_id']//label//input[@aria-label='${Add.Receiver_type}']//..//span[2]`).innerText();
			const actionCompany = await this.page.locator(`//div[@id='action_company_id']//label//input[@aria-label='${Add.Action_company}']//..//span[2]`).innerText();
			await expect(formNo).toBe(localStorage.formNo);
			await expect(formName).toBe(localStorage.formName);
			await expect(description).toBe(Add.Description);
			await expect(consentCategory).toBe(Add.Consent_category);
			await expect(dataControl).toBe(Add.Data_controller);
			await expect(consentType).toBe(Add.Consent_type);
			await expect(productLevel).toBe(Add.Product_level);
			await expect(legalBase).toBe(Add.Legal_base);
			await expect(receiverType).toBe(Add.Receiver_type);
			await expect(actionCompany).toBe(Add.Action_company);
		} else {
			console.log('---------------------------------');
			console.log('Verify Update Data');
			console.log('---------------------------------');

			const receiverType = await this.page.locator(`//div[@id='receiver_type_id']//label//input[@aria-label='${Edit.Receiver_type}']//..//span[2]`).innerText();
			const actionCompany = await this.page.locator(`//div[@id='action_company_id']//label//input[@aria-label='${Edit.Action_company}']//..//span[2]`).innerText();
			await expect(formNo).toBe(localStorage.formNo);
			await expect(formName).toBe(localStorage.formName);
			await expect(description).toBe(Edit.Description);
			await expect(consentCategory).toBe(Edit.Consent_category);
			await expect(dataControl).toBe(Edit.Data_controller);
			await expect(consentType).toBe(Edit.Consent_type);
			await expect(productLevel).toBe(Edit.Product_level);
			await expect(legalBase).toBe(Edit.Legal_base);
			await expect(receiverType).toBe(Edit.Receiver_type);
			await expect(actionCompany).toBe(Edit.Action_company);
		}

		await this.page.waitForTimeout(1000);
		await this.page.locator("//button[@type='button'][text()='ย้อนกลับ' or text()='back page']").click();
		await this.page.waitForTimeout(1000);
	}

	async Delete_Consent_Form() {
		console.log('---------------------------------');
		console.log('Delete_Consent_Form');
		console.log('---------------------------------');
		const statusForm = await this.page.locator("//div[@id='status-name']").textContent();

		if (statusForm == 'DRAFT') {
			await this.page.locator("//button[@id='btn-delete-form']").click();
			await this.page.waitForTimeout(500);
			await this.page.locator("//button[@id='on-submit-button']").click();
			console.log('ลบ Form สำเร็จ');

		} else {
			throw new Error(`ไม่สามารถลบได้เพราะไม่ใช่สถานะ DRAFT แต่เป็นสถานะ: ${statusForm}`);
		};
		await this.page.waitForTimeout(500);

	}

	async Search_Consent_Form() {
		console.log('---------------------------------');
		console.log('Search_Consent_Form');
		console.log('---------------------------------');


		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.locator("//input[@id='input-search-form-name']").fill(localStorage.formName);
		await this.page.locator("//button[@id='btn-search-consent-form']").click();

	}

	async Consent_form_search_by_filter() {
		console.log('---------------------------------');
		console.log('Consent_form_search_by_filter');
		console.log('---------------------------------');


		if (Filter.consent_category !== 'All') {
			await this.page.getByRole('button', { name: 'All หมวดหมู่ความยินยอม' }).click();
			await this.page.getByLabel(Filter.consent_category, { exact: true }).getByText(Filter.consent_category).click();
			console.log('เลือกหมวดหมู่ความยินยอม: ' + Filter.consent_category);

			const count = await this.page.locator('//tr[@class="ant-table-row ant-table-row-level-0"]').count();
			for (let i = 1; i <= count; i++) {
				const text = (await this.page.locator(`//tr[@data-row-key="${i}"]//td[6]`).textContent())?.trim() ?? '';
				await expect(text).toBe(Filter.consent_category);
			}
			await this.page.locator("//button[@id='btn-clear-filter']").click();

		}

		if (Filter.status !== 'All') {
			await this.page.getByRole('button', { name: 'All สถานะ' }).click();
			await this.page.getByLabel(Filter.status, { exact: true }).getByText(Filter.status).click();
			console.log('เลือกสถานะ: ' + Filter.status);

			const count = await this.page.locator('//tr[@class="ant-table-row ant-table-row-level-0"]').count();
			for (let i = 1; i <= count; i++) {
				const text = (await this.page.locator(`//tr[@data-row-key="${i}"]//td[9]`).textContent())?.trim() ?? '';
				await expect(text).toBe(Filter.status);
			}
			await this.page.locator("//button[@id='btn-clear-filter']").click();

		}

		if (Filter.status !== 'All') {
			await this.page.getByRole('button', { name: 'All ผู้ควบคุมข้อมูล' }).click();
			await this.page.getByLabel(Filter.data_controller, { exact: true }).getByText(Filter.data_controller).click();
			console.log('เลือกผู้ควบคุมข้อมูล: ' + Filter.data_controller);

			const count = await this.page.locator('//tr[@class="ant-table-row ant-table-row-level-0"]').count();
			for (let i = 1; i <= count; i++) {
				const text = (await this.page.locator(`//tr[@data-row-key="${i}"]//td[5]`).textContent())?.trim() ?? '';
				await expect(text).toBe(Filter.data_controller);
			}
			await this.page.locator("//button[@id='btn-clear-filter']").click();

		}

		await this.page.waitForTimeout(1000);
	}

	async Create_Consent_Versioning() {
		console.log('---------------------------------');
		console.log('Create_Consent_Versioning');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.locator("//button[@type='button'][text()='สร้างแบบฟอร์ม เวอร์ชันนิ่ง' or text()='Create Consent Versioning']").click();
		await this.page.locator("//input[@id='consent_version']").fill(Add.Version);
		await this.page.locator("//input[@id='name']").fill(Add.Consent_versioning_name);

		const versioningName = await this.page.locator("//input[@id='name']").inputValue();
		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			versionsName: versioningName
		});

		await this.page.locator("//textarea[@id='description']").fill(Add.Description);
		await this.page.locator("//div[@id='introduction']//div[@class='ql-editor ql-blank']").fill(Add.Introduction);

		const sectionLength = Add.Sections.length;
		const addSectionBtn = this.page.locator("//button[@id='btn-add-section']");

		// กดเพิ่ม Section ตามจำนวน
		for (let i = 0; i < sectionLength - 1; i++) {
			await addSectionBtn.click();
		}

		// กรอก Section / Content
		for (let i = 0; i < sectionLength; i++) {
			const fillSections = this.page.locator(`//div[@id='consent_details_title_${i}']//div[@class='ql-editor ql-blank']`);
			await fillSections.fill(Add.Sections[i].section);

			const fillContent = this.page.locator(`//div[@id='consent_details_content_${i}']//div[@class='ql-editor ql-blank']`);
			await fillContent.fill(Add.Sections[i].content);
		}

		await this.page.getByRole('button', { name: 'บันทึก' }).click();
		await this.page.waitForTimeout(2000);
	}

	async View_Consent_Versioning(functions: string) {
		console.log('---------------------------------');
		console.log('View_Consent_Versioning');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByRole('row', { name: localStorage.versionsName }).locator('#btn-view-consentversion').click();
		await this.page.waitForTimeout(2000);
		// 	เพิ่มตรวจข้อมูลหลังสร้างหรือแก้ไขเสร็จ
		if (functions === 'add') {
			const consentVersionInput = this.page.locator("//input[@id='consent_version']");
			const consentVersion = await consentVersionInput.inputValue();
			const nameInput = this.page.locator("#name");
			const name = await nameInput.inputValue();
			const descriptionInput = this.page.locator("#description");
			const description = await descriptionInput.inputValue();
			const introductionEditor = this.page.locator("#introduction .ql-editor");
			const introduction = await introductionEditor.innerText();

			await expect(consentVersion).toBe(Add.Version);
			await expect(name).toBe(Add.Consent_versioning_name);
			await expect(description).toBe(Add.Description);
			await expect(introduction).toBe(Add.Introduction);

			const sectionLength = Add.Sections.length;
			const count = await this.page.locator('//div[@class="mb-6 border border-gray-200 rounded-lg p-6 relative bg-default-50"]').count();

			// กดเพิ่ม Section ตามจำนวน
			if (sectionLength === count) {
				// กรอก Section / Content
				for (let i = 0; i < sectionLength; i++) {
					const getSections = this.page.locator(`//div[@id='consent_details_title_${i}']//div[@class='ql-editor']`);
					const Sections = await getSections.innerText();
					await expect(Sections).toBe(Add.Sections[i].section);


					const getContent = this.page.locator(`//div[@id='consent_details_content_${i}']//div[@class='ql-editor']`);
					const Content = await getContent.innerText();
					await expect(Content).toBe(Add.Sections[i].content);

					await this.page.waitForTimeout(1000);

				}
			}
		} else {
			const consentVersionInput = this.page.locator("//input[@id='consent_version']");
			const consentVersion = await consentVersionInput.inputValue();
			const nameInput = this.page.locator("#name");
			const name = await nameInput.inputValue();
			const descriptionInput = this.page.locator("#description");
			const description = await descriptionInput.inputValue();
			const introductionEditor = this.page.locator("#introduction .ql-editor");
			const introduction = await introductionEditor.innerText();

			await expect(consentVersion).toBe(Edit.Version);
			await expect(name).toBe(localStorage.versionsName);
			await expect(description).toBe(Edit.Description);
			await expect(introduction).toBe(Edit.Introduction);

			const sectionLength = Edit.Sections.length;
			const count = await this.page.locator('//div[@class="mb-6 border border-gray-200 rounded-lg p-6 relative bg-default-50"]').count();

			// กดเพิ่ม Section ตามจำนวน
			if (sectionLength === count) {
				// Section 
				for (let i = 0; i < sectionLength; i++) {
					const getSections = this.page.locator(`//div[@id='consent_details_title_${i}']//div[@class='ql-editor']`);
					const Sections = await getSections.innerText();
					await expect(Sections).toBe(Edit.Sections[i].section);
					// Content
					const getContent = this.page.locator(`//div[@id='consent_details_content_${i}']//div[@class='ql-editor']`);
					const Content = await getContent.innerText();
					await expect(Content).toBe(Edit.Sections[i].content);

					await this.page.waitForTimeout(1000);

				}
			}

		}
		await this.page.locator("//button[@id='cancel-button']").click();

	}

	async Update_Consent_Versioning() {
		console.log('---------------------------------');
		console.log('Update_Consent_Versioning');
		console.log('---------------------------------');

		await this.Create_Consent_Versioning();

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}
		const ramdom = random4Digits();
		await this.page.getByRole('row', { name: localStorage.versionsName }).locator('#btn-update-consentversion').click();

		await this.page.waitForTimeout(2000);
		await this.page.locator("//input[@id='consent_version']").fill(Edit.Version);

		await this.page.locator("//input[@id='name']").fill(`${Edit.Consent_versioning_name}_${ramdom}`);
		const versioningName = await this.page.locator("//input[@id='name']").inputValue();
		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			versionsName: versioningName
		});

		await this.page.locator("//textarea[@id='description']").fill(Edit.Description);
		await this.page.locator("//div[@id='introduction']//div[@class='ql-editor']").fill(Edit.Introduction);

		const sectionLength = Edit.Sections.length;
		const count = await this.page.locator('//div[@class="mb-6 border border-gray-200 rounded-lg p-6 relative bg-default-50"]').count();

		// กดเพิ่ม Section ตามจำนวน
		if (sectionLength === count) {
			// กรอก Section / Content
			for (let i = 0; i < sectionLength; i++) {
				const fillSections = this.page.locator(`//div[@id='consent_details_title_${i}']//div[@class='ql-editor']`);
				await fillSections.fill(Edit.Sections[i].section);

				const fillContent = this.page.locator(`//div[@id='consent_details_content_${i}']//div[@class='ql-editor']`);
				await fillContent.fill(Edit.Sections[i].content);

				await this.page.waitForTimeout(1000);

			}
		}
		await this.page.getByRole('button', { name: 'บันทึก' }).click();
		await this.page.waitForTimeout(2000);
	}

	async Delete_Consent_Versioning() {
		console.log('---------------------------------');
		console.log('Create_Consent_Versioning');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByRole('row', { name: localStorage.versionsName }).locator('#btn-delete-consentversion').click();
		await this.page.locator("//button[@id='on-submit-button']").click();

		await this.page.waitForTimeout(3000);
	}

	async Search_Consent_Version() {
		console.log('---------------------------------');
		console.log('Search_Consent_Version');
		console.log('---------------------------------');

		await this.Select_Menu_Consent_Configuration();

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.locator("//input[@id='input-search-form-name']").fill(localStorage.formName);
		await this.page.locator("//button[@id='btn-search-consent-form']").click();
		await this.page.getByRole('row', { name: localStorage.formName }).locator('#create-versioning').click();

	}

	async Select_Menu_Setting() {
		console.log('---------------------------------');
		console.log('Select_Menu_Setting');
		console.log('---------------------------------');

		await this.page.getByText('การตั้งค่าเบื้องต้น').click();

	}

	async Select_SubTask_Channels() {
		console.log('---------------------------------');
		console.log('Select_SubTask_Channels');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByText('Channels').click();


	}

	async Select_SubTask_ReceiverType() {
		console.log('---------------------------------');
		console.log('Select_SubTask_ReceiverType');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByText('Receiver Mangement').click();

	}

	async Select_SubTask_ActionCompany() {
		console.log('---------------------------------');
		console.log('Select_SubTask_ActionCompany');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByText('Action Companies').click();

	}

	async Create_Channels_Management() {
		console.log('---------------------------------');
		console.log('Create_Channels_Management');
		console.log('---------------------------------');

		const ramdom = random4Chars();
		await this.page.getByText('Channels').click();
		await this.page.locator("//button[@type='button'][text()='สร้างชาแนล' or text()='Create Channel']").click();
		await this.page.getByRole('textbox', { name: 'ชื่อชาแนล*' }).fill(`${Add.Channel_name}_${ramdom}`);

		const channelName = await this.page.getByRole('textbox', { name: 'ชื่อชาแนล*' }).inputValue();
		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			channelName: channelName
		});

		await this.page.locator("//button[@id='channel_type']").click();
		await this.page.locator(`//li[@role='option']//span[text()='${Add.Channel_type}']`).click();
		await this.page.getByRole('textbox', { name: 'รายละเอียด' }).fill(Add.Description);
		await this.page.locator("//button[@id='role']").click();
		await this.page.locator(`//li[@role='option']//span[text()='${Add.Role}']`).click();
		await this.page.getByRole('radiogroup', { name: 'ตรวจสอบความยินยอม' }).getByLabel(Add.Inquiry).check();
		await this.page.getByRole('radiogroup', { name: 'ขอความยินยอม' }).getByLabel(Add.Acquire).check();
		await this.page.getByRole('radiogroup', { name: 'การบำรุงรักษา' }).getByLabel(Add.Maintenance).check();
		await this.page.locator(locator.submit).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(locator.btnOK).click();
		await this.page.waitForTimeout(1000);
	}

	async Search_Channels_Name() {
		console.log('---------------------------------');
		console.log('Search_Channels_Name');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByRole('textbox', { name: 'ค้นหาด้วย ชื่อชาแนล' }).fill(localStorage.channelName);
		await this.page.getByRole('button', { name: 'ค้นหา' }).click();
		await this.page.waitForTimeout(2000);

	}

	async View_Channels_Management(functions: string) {
		console.log('---------------------------------');
		console.log('View_Channels_Management');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByRole('row', { name: localStorage.channelName }).locator('#btn-view-form').click();
		await this.page.waitForTimeout(2000);

		if (functions === 'add') {
			let channelName = await this.page.locator("//input[@name='chanale_name']").inputValue();
			let channelType = await this.page.locator("//button[@id='channel_type']//span").innerText();
			let description = await this.page.locator("//textarea[@name='description']").inputValue();
			let role = await this.page.locator("//button[@id='role']//span").innerText();

			await expect(channelName).toBe(localStorage.channelName);
			await expect(channelType).toBe(Add.Channel_type);
			await expect(description).toBe(Add.Description);
			await expect(role).toBe(Add.Role);

			// Inquiry
			if (Add.Inquiry === 'Yes') {
				let inquiry = await this.page.locator("//div[@id='is_inquiry_consent']//span[text()='Yes']").innerText();
				console.log('Inquiry : Yes');
				await expect(inquiry).toBe(Add.Inquiry);

			} else {
				let inquiry = await this.page.locator("//div[@id='is_inquiry_consent']//span[text()='No']").innerText();
				console.log('Inquiry : No');
				await expect(inquiry).toBe(Add.Inquiry);
			}

			// Acquire
			if (Add.Acquire === 'Yes') {
				let inquiry = await this.page.locator("//div[@id='is_acquire_consent_radio']//span[text()='Yes']").innerText();
				console.log('Acquire : Yes');
				await expect(inquiry).toBe(Add.Acquire);

			} else {
				let inquiry = await this.page.locator("//div[@id='is_acquire_consent_radio']//span[text()='No']").innerText();
				console.log('Acquire : No');
				await expect(inquiry).toBe(Add.Acquire);
			}

			// Maintenance
			if (Add.Maintenance === 'Yes') {
				let inquiry = await this.page.locator("//div[@id='is_maintenance_consent']//span[text()='Yes']").innerText();
				console.log('Maintenance : Yes');
				await expect(inquiry).toBe(Add.Maintenance);

			} else {
				let inquiry = await this.page.locator("//div[@id='is_maintenance_consent']//span[text()='No']").innerText();
				console.log('Maintenance : No');
				await expect(inquiry).toBe(Add.Maintenance);
			}

		} else {
			let channelName = await this.page.locator("//input[@name='chanale_name']").inputValue();
			let channelType = await this.page.locator("//button[@id='channel_type']//span").innerText();
			let description = await this.page.locator("//textarea[@name='description']").inputValue();
			let role = await this.page.locator("//button[@id='role']//span").innerText();

			await expect(channelName).toBe(localStorage.channelName);
			await expect(channelType).toBe(Edit.Channel_type);
			await expect(description).toBe(Edit.Description);
			await expect(role).toBe(Edit.Role);

			// Inquiry
			if (Edit.Inquiry === 'Yes') {
				let inquiry = await this.page.locator("//div[@id='is_inquiry_consent']//span[text()='Yes']").innerText();
				console.log('Inquiry : Yes');
				await expect(inquiry).toBe(Edit.Inquiry);

			} else {
				let inquiry = await this.page.locator("//div[@id='is_inquiry_consent']//span[text()='No']").innerText();
				console.log('Inquiry : No');
				await expect(inquiry).toBe(Edit.Inquiry);
			}

			// Acquire
			if (Edit.Acquire === 'Yes') {
				let inquiry = await this.page.locator("//div[@id='is_acquire_consent_radio']//span[text()='Yes']").innerText();
				console.log('Acquire : Yes');
				await expect(inquiry).toBe(Edit.Acquire);

			} else {
				let inquiry = await this.page.locator("//div[@id='is_acquire_consent_radio']//span[text()='No']").innerText();
				console.log('Acquire : No');
				await expect(inquiry).toBe(Edit.Acquire);
			}

			// Maintenance
			if (Edit.Maintenance === 'Yes') {
				let inquiry = await this.page.locator("//div[@id='is_maintenance_consent']//span[text()='Yes']").innerText();
				console.log('Maintenance : Yes');
				await expect(inquiry).toBe(Edit.Maintenance);

			} else {
				let inquiry = await this.page.locator("//div[@id='is_maintenance_consent']//span[text()='No']").innerText();
				console.log('Maintenance : No');
				await expect(inquiry).toBe(Edit.Maintenance);
			}
		}

		await this.page.waitForTimeout(1000);
		await this.page.locator("//button[@id='cancel-button']").click();
		await this.page.waitForTimeout(1000);

	}

	async Update_Channels_Management() {
		console.log('---------------------------------');
		console.log('Update_Channels_Management');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		const ramdom = random4Chars();
		await this.page.getByRole('row', { name: localStorage.channelName }).locator('#btn-update-channel').click();
		await this.page.waitForTimeout(2000);
		await this.page.getByRole('textbox', { name: 'ชื่อชาแนล*' }).fill(`${Edit.Channel_name}_${ramdom}`);

		const channelName = await this.page.getByRole('textbox', { name: 'ชื่อชาแนล*' }).inputValue();
		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			channelName: channelName
		});

		await this.page.locator("//button[@id='channel_type']").click();
		await this.page.locator(`//li[@role='option']//span[text()='${Edit.Channel_type}']`).click();
		await this.page.getByRole('textbox', { name: 'รายละเอียด' }).fill(Edit.Description);
		await this.page.locator("//button[@id='role']").click();
		await this.page.locator(`//li[@role='option']//span[text()='${Edit.Role}']`).click();
		await this.page.getByRole('radiogroup', { name: 'ตรวจสอบความยินยอม' }).getByLabel(Edit.Inquiry).check();
		await this.page.getByRole('radiogroup', { name: 'ขอความยินยอม' }).getByLabel(Edit.Acquire).check();
		await this.page.getByRole('radiogroup', { name: 'การบำรุงรักษา' }).getByLabel(Edit.Maintenance).check();
		await this.page.locator(locator.submit).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(locator.btnOK).click();
		await this.page.waitForTimeout(2000);


	}

	async Delete_Channels_Management() {
		console.log('---------------------------------');
		console.log('Delete_Channels_Management');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByRole('row', { name: localStorage.channelName }).locator('#btn-delete-channel').click();
		await this.page.locator(locator.btnOK).click();

	}

	async Create_Receiver_Type() {
		console.log('---------------------------------');
		console.log('Create_Receiver_Type');
		console.log('---------------------------------');

		const ramdom = random4Chars();
		await this.page.locator(locator.form.btnCreForm).click();
		await this.page.waitForTimeout(2000);

		await this.page.locator("//input[@id='name']").fill(`${Add.Receiver_name}_${ramdom}`);
		await this.page.locator("//input[@id='display_name']").fill(`${Add.Display_name}_${ramdom}`);
		await this.page.locator("//textarea[@id='description']").fill(Add.Description);

		const receiverName = await this.page.locator("//input[@id='name']").inputValue();
		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			receiverName: receiverName
		});

		await this.page.locator(locator.submit).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(locator.btnOK).click();
		await this.page.waitForTimeout(1000);
	}

	async Create_Action_Companies() {
		console.log('---------------------------------');
		console.log('Create_Action_Companies');
		console.log('---------------------------------');

		const ramdom = random4Chars();
		await this.page.locator(locator.form.btnCreForm).click();
		await this.page.waitForTimeout(2000);

		await this.page.locator("//input[@id='name']").fill(`${Add.Action_name}_${ramdom}`);
		await this.page.locator("//input[@id='display_name']").fill(`${Add.Display_name}_${ramdom}`);
		await this.page.locator("//textarea[@id='description']").fill(Add.Description);

		const actionName = await this.page.locator("//input[@id='name']").inputValue();
		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			actionName: actionName
		});

		await this.page.locator(locator.submit).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(locator.btnOK).click();
		await this.page.waitForTimeout(1000);
	}

	async Search_Action_Companies() {
		console.log('---------------------------------');
		console.log('Search_Action_Companies');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.locator("//input[@id='input-search-form-name']").fill(localStorage.actionName);
		await this.page.getByRole('button', { name: 'ค้นหา' }).click();
		await this.page.waitForTimeout(2000);
	}

	async Search_Receiver_Type() {
		console.log('---------------------------------');
		console.log('Search_Receiver_Type');
		console.log('---------------------------------');

		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.locator("//input[@id='input-search-form-name']").fill(localStorage.receiverName);
		await this.page.getByRole('button', { name: 'ค้นหา' }).click();
		await this.page.waitForTimeout(2000);
	}

	async Update_Receiver_Type() {
		console.log('---------------------------------');
		console.log('Update_Receiver_Type');
		console.log('---------------------------------');

		const ramdom = random4Chars();
		const localStorage = await this.LoadLocalStorage();
		if (!localStorage) {
			console.log('No localStorage found, exiting verCar function.');
			return;
		}

		await this.page.getByRole('row', { name: localStorage.receiverName }).locator('#btn-update-channel').click();
		await this.page.waitForTimeout(2000);

		await this.page.locator("//input[@id='name']").fill(`${Edit.Receiver_name}_${ramdom}`);
		await this.page.locator("//input[@id='display_name']").fill(`${Edit.Display_name}_${ramdom}`);
		await this.page.locator("//textarea[@id='description']").fill(Edit.Description);

		const receiverName = await this.page.locator("//input[@id='name']").inputValue();
		await JSONFile.updateJsonFile('LocalStorage/LocalStorage.json', {
			receiverName: receiverName
		});

		await this.page.locator(locator.submit).click();
		await this.page.waitForTimeout(500);
		await this.page.locator(locator.btnOK).click();
		await this.page.waitForTimeout(1000);
	}

}
