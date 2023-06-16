import { expect } from 'chai';
import LoginPage from '../../src/pages/landingPage/LogInPage';
// import ManageCore from 'src/pages/landingPage/ManageCore';

describe(`Verify correctness of labels and URL `, () => {

    const expectedLabel = 'Log In';
    const expectedLabel2 = 'Need Help?'

    it('Verify browser URL is correct', () => {
        LoginPage.open();
        expect(browser.getUrl()).to.contain('https://stage-manage.golfnowcentral.com');
    });
    it('Verify Log In button label', () => {
        LoginPage.open();
        expect(LoginPage.submitBtn.getText()).to.equal(expectedLabel);
    });

    it('Verify `Need Help?` button label', () => {
        LoginPage.open();
        expect(LoginPage.help.getText()).to.equal(expectedLabel2);
    });
})
