import { Page } from '@playwright/test';
import { UI } from '../Keyword/CommonKeyword';

export const Auth = {

    AuthenticationFunctionAdmin: async (page: Page) => {
        await UI.login_Admin(page);
    },
    AuthenticationFunctionPI: async (page: Page) => {
        await UI.login_PI(page);
    },
    AuthenticationFunctionCallcenter: async (page: Page) => {
        await UI.login_Callcenter(page);
    },
    AuthenticationFunctionDPO: async (page: Page) => {
        await UI.login_DPO(page);
    }
}