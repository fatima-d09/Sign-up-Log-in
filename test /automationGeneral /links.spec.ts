import { expect } from 'chai';
import LoginPage from '../../src/pages/landingPage/LogInPage';

describe(`Verify Login Links`, () => {

    //rename this file to be more descriptive

    const expectedLabel1 = 'Forgot your password?';

    it('Verify links on page work', () => {
        LoginPage.open();
        LoginPage.clicked();

        expect(browser.getUrl()).to.include('https://stage-manage.golfnowcentral.com');
        expect(LoginPage.forgot.isClickable()).to.be.true;
        expect(LoginPage.help.isClickable()).to.be.true;
    });

    it('Verify forgot password link label', () => {
        LoginPage.open();
        expect(LoginPage.forgot.getText()).to.equal(expectedLabel1);
    });


})
