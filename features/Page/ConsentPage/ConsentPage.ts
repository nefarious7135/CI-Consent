import { expect, Page } from '@playwright/test';
import { locator } from '../../Locator/PageLocator';


async function DateFormat(page: Page, locator: string, index: number, input: string, delay: number) {
    await page.locator(locator).nth(index).focus();
    await page.keyboard.type(input, { delay: delay });
    await page.locator(locator).nth(index).press('Enter');
}

export const ConsentPage = (page: Page) => ({

    formNo: async (input: string) => {
        console.log('✅ formNo :', input);
        await page.locator(locator.form.form_no).fill(input); 
    },

    formName: async (input: string) => {
        console.log('✅ formName :', input);
        await page.locator(locator.form.form_name).fill(input); 
    },

});


export const fillAndCheck = async (page: Page, selector: string, value: string) => {
    const input = await page.locator(selector);
    await input.fill(value);
    await expect(input).toHaveValue(value);
};




