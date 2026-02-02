import { test as base } from '@playwright/test';
import { FeatureHelper } from './Feature';
import path from 'path';

export let MAIN_URL: any;
// export let functions: any;

type TestFixtures = {
  Features: FeatureHelper;
  env: string;
  Functions: string;
};

export const test = base.extend<TestFixtures>({
  Features: async ({ page }, use) => {
    const features = new FeatureHelper(page);
    await use(features);
  },

  env: async ({ }, use, testInfo) => {
    const env = testInfo.project.name.toLowerCase().includes('dev') ? 'dev' : 'uat';
    await use(env);
  },

  Functions: async ({ }, use, testInfo) => {
    const Functions = testInfo.file.split(path.sep).pop()?.toLowerCase().includes('add') ? 'add' : 'edit';
    await use(Functions);
  },
});

test.beforeEach(async ({ Features, page, env, baseURL }, testInfo) => {
  const fullPath = testInfo.file;
  console.log(`✅ fullPath: ${fullPath}`);
  const noExt = path.parse(fullPath).name;
  console.log(`✅ noExt: ${noExt}`);
  const fileName = noExt.replace(/\.spec$/, '');
  console.log(`✅ fileName: ${fileName}`);

  let functions = '';

  // MAIN_URL ต้องมี ไม่งั้น throw ทันที (ช่วยจับ config พลาด)
  if (!baseURL) {
    throw new Error(
      `[config] "use.baseURL" is required for project "${testInfo.project.name}".`
    );
  }

  if (fileName.startsWith('add-')) functions = 'add';
  else if (fileName.startsWith('edit-')) functions = 'edit';
  else if (fileName.startsWith('verify-')) functions = 'verify';
  
  MAIN_URL = baseURL;

  console.log(`✅ ENV: ${env}`);
  console.log(`✅ MAIN_URL: ${MAIN_URL}`);
  await Features.Mockdata(env, MAIN_URL, fileName, functions);
});
