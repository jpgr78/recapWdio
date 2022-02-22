const DynamicLoadingPage = require('../pageobjects/dynamic-loading.page');


describe('My Dynamic Loading Page', () => {
    it('should verify that start button exists', async () => {
        await DynamicLoadingPage.open();

        await expect(DynamicLoadingPage.startButton).toBeExisting();
        
    });

    
    
    it('should detect button is not there ', async () => {
         
        await DynamicLoadingPage.startButton.click()
        await DynamicLoadingPage.startButton.waitForDisplayed({ timeout: 5000, reverse:true });
        await expect(DynamicLoadingPage.h4).toHaveTextContaining(
            'Hello World');
       
    });
        
  
});