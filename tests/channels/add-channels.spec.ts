import { test } from '../../features/Feature/Setup';
test.describe.configure({ mode: 'parallel' });


test.describe('Login Consent Management', () => {
  
  test('Create channel management', async ({ Features, Functions }) => {
    await Features.Login_PI();
    await Features.Select_Menu_Setting();
    await Features.Select_SubTask_Channels();
    await Features.Create_Channels_Management();
    await Features.Search_Channels_Name();
    await Features.View_Channels_Management(Functions);
    await Features.Delete_Channels_Management();
    

  }); 

});



