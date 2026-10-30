const LoginPage = require('../pageobjects/login.page');

describe('SauceDemo Positive Login', () => {

    it('should successfully log in standard_user with secret_sauce', async () => {
        // Step 1: Open SauceDemo login page
        await LoginPage.open();

        // Step 2: Perform login action
        await LoginPage.userLogin('standard_user', 'secret_sauce');

        // Step 3: Assert user is redirected to inventory page and header displays "Products"
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(LoginPage.titleHeader).toHaveText('Products');
    });

});