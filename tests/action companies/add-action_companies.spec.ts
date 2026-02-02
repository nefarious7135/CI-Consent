import { test } from '../../features/Feature/Setup';
test.describe.configure({ mode: 'parallel' });


test.describe('Login Consent Management', () => {
  
  test('Create receiver type', async ({ Features, Functions }) => {
    await Features.Login_DPO();
    await Features.Select_Menu_Setting();
    await Features.Select_SubTask_ActionCompany();
    await Features.Create_Action_Companies();
    await Features.Search_Action_Companies();
    // ค้นหา 
    // วิว 
    // ลบ
    // await Features.View_Channels_Management(Functions);

  
  }); 

});



