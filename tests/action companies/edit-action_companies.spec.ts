import { test } from '../../features/Feature/Setup';
test.describe.configure({ mode: 'parallel' });


test.describe('Login Consent Management', () => {

  test('Create And Verify Consent Form', async ({ Features, Functions }) => {
    await Features.Login_PI();
    await Features.Create_Consent_Form();
    await Features.Search_Consent_Form();
    await Features.View_Consent_Form(Functions);
    await Features.Consent_form_search_by_filter();
    // await Features.Delete_Consent_Form(); 
  });

});

