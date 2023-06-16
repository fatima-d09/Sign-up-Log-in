import { config } from '../../src/config';
import { expect } from 'chai';
import LoginPage from '../../src/pages/landingPage/LogInPage';
import ManageCore from '../../src/pages/landingPage/ManageCore';

describe(`Verify login / logout`, () => {

    it('Verify login to the Manage App', () => {
        LoginPage.open();
        LoginPage.loginUser(config.username, config.password);
        LoginPage.submit();
        ManageCore.bookingEngineButton.waitForDisplayed({ timeout: 20000 });
       
        expect(ManageCore.bookingEngineButton.isDisplayed()).to.be.true;
    });

    it('Verify logout from the Manage App', () => {
        LoginPage.username.waitForDisplayed({ timeout: 20000 });

        expect(LoginPage.username.isDisplayed()).to.be.true;
        expect(LoginPage.password.isDisplayed()).to.be.true;
    });
});
