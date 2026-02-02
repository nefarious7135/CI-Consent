import { test } from '../../features/Feature/Setup';
test.describe.configure({ mode: 'parallel' });


test.describe('Login Consent Management', () => {
  
  test('Update consent versioning', async ({ Features, Functions }) => {
    await Features.Login_PI();
    await Features.Search_Consent_Version();
    await Features.Update_Consent_Versioning();
    await Features.View_Consent_Versioning(Functions);
    await Features.Delete_Consent_Versioning();
    
  }); 

});

