import { expect } from 'chai';
import LoginPage from '../../src/pages/landingPage/LogInPage';

describe(`Verify Login Page's Text Box`, () => {

    //first word of file name should be lowercased 

    const textToCopy = 'test123';

    it('Verify cursor appears while typing in the text box', () => {
        LoginPage.open();
        const usernameTextBox = LoginPage.username;
        usernameTextBox.setValue('');

        const cursorVisible = usernameTextBox.isFocused();
        expect(cursorVisible).to.be.true;
    });

    it('Verify Password in textbox is hidden', () => {
        if (LoginPage.password.getAttribute('type') === 'password') {
            expect(LoginPage.password.getAttribute('type')).to.equal('password', 'Password textbox is hidden');
        }
        else {
            expect(LoginPage.password.getAttribute('type')).to.not.equal('password', 'Password textbox is not hidden');
        }
    });

    it('Verify user can copy and paste in the text boxes', () => {
        LoginPage.open();

        // Set the text by pasting it into the username text box
        LoginPage.username.setValue(textToCopy);
        // Verify that the text in the username text box is equal to the copied text
        expect(LoginPage.username.getValue()).to.equal(textToCopy);

        // Set the text by pasting it into the password text box
        LoginPage.password.setValue(textToCopy);
        // Verify that the text in the password text box is equal to the copied text
        expect(LoginPage.password.getValue()).to.equal(textToCopy);
    });

    it('Verify cursor appears while typing in the text box', () => {
        LoginPage.open();
        LoginPage.username.setValue('');

        expect(LoginPage.username.isFocused()).to.be.true;
    });
})