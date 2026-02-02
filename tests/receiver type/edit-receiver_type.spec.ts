import { test } from '../../features/Feature/Setup';
test.describe.configure({ mode: 'parallel' });


test.describe('Login Consent Management', () => {
  
  test('Create consent versioning', async ({ Features, Functions }) => {
    await Features.Login_DPO();
    
  }); 

});



