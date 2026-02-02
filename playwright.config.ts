import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // workers: process.env.CI ? 1 : undefined,
  workers:1,
  reporter: [
    ['html', { open: 'always' }]
    //['./teamsReporter.ts']
  ],
  timeout: 200000, // 🕒 timeout ของ test ทั้งหมด
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
    actionTimeout: 20000,    // 🕒 timeout ของ action เช่น click(), fill()
    navigationTimeout: 40000,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Backoffice-DEV',
      use: {
        baseURL: 'https://dev-lms-extended.nonprod.ngernhaijai.com',
        viewport: { width: 1800, height: 900 },
      },
    },
    {
      name: 'Backoffice-UAT',
      use: {
        baseURL: 'https://uat-lms-extended.nonprod.ngernhaijai.com',
        viewport: { width: 1800, height: 900 },
      },
    },
    {
      name: 'Consent-DEV',
      use: {
        baseURL: 'https://dev-consent-management-fe.nonprod.ngernhaijai.com',
        viewport: { width: 1800, height: 900 },
      },
    },
    {
      name: 'Consent-UAT',
      use: {
        baseURL: 'https://uat-consent-management-fe.nonprod.ngernhaijai.com',
        viewport: { width: 1400, height: 900 },
      },
    },
  ],
});
