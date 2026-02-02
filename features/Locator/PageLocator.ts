export const locator = {
  username: '//input[@id="username"]',
  password: '//input[@id="password"]',
  btnlogin: '//button[@type="submit"]',
  setting : '//button[@type="button"]//i[@class="fa-solid fa-gear fa-lg"]',
  closed : "//button[@type='button']//i[@class='fa-solid fa-xmark']",
  submit: "//button[@id='submit-button']",
  btnOK: "//button[@id='on-submit-button']",
  form: {
    menuForm: "//div[contains(@data-menu-id, 'consent-configuration')]",
    subMenuForm: "//li[contains(@data-menu-id, 'consent-forms')]",
    btnCreForm: "//button[@id='btn-create-consent-form']",
    form_no: "//input[@id='form_no']",
    form_name: "//input[@id='consent_form_name']",
    description: "//textarea[@id='description']",
    category: "//button[@id='consent_category']",
    data_control: "//button[@id='data_control']",
    consent_type: "//button[@id='consent_type']",
    product_level: "//button[@id='product_level']",
    legal_base: "//button[@id='legal_base']",
  },
  
  borrower_documents: {
    checkbox: [
      '[id="verified.CT10002.verified"]', //C2C
      '[id="verified.CT10003.verified"]', //CRL

    ],
  },
  
};