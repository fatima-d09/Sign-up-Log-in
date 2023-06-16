import BasePage from '../BasePage';
import { config } from '../../config';

class LoginPage extends BasePage {
  get username() { return $('#username') }
  get password() { return $('#password') }
  get link() {
    const link = $('=GolfNow Central © 2023')
    console.log(link.getText)
    console.log(link.getAttribute('href'))
    return $(link)
  }
  get forgot() { return $('#forgot-password') }
  get help() { return $('.walkme-in-wrapper.walkme-override.walkme-css-reset') }
  get submitBtn() { return $('#auth > fieldset > div.form-actions > button') }
  get helpTextBox() { return $('input.walkme-search-box.walkme-loading-hide.walkme-override.walkme-css-reset[placeholder="Type in your question..."]'); }
  get searchIcon() { return $('.walkme-search-box-button-image.walkme-icon-font.walkme-override.walkme-css-reset') }

  private get closeQuestionaryButton() { return $('svg.wm-ignore-css-reset') }
  private get closeNewLookButton() { return $('//button[@id="009d52ee-e731-9536-eee9-a299ff9d2a7f"]') }
  private get closeHolidaysButton() { return $('//button[@id="7068bdd4-5cd5-8a50-ed9a-7fce8a721bc9"]') }

  public get errorMessageEmptyValues() { return $('//span[text()="SORRY: login missing"]') }
  public get errorMessageIncorectValues() { return $('//span[text()="SORRY: The username or password you entered is incorrect."]') }

  open() {
    super.open(config.domain);
    this.username.waitForDisplayed({ timeout: 55000 });
    try {
      this.closeHolidaysButton.waitForDisplayed({ timeout: 4000 });
      this.closeHolidaysButton.click();
      this.closeNewLookButton.waitForDisplayed({ timeout: 4000 });
      this.closeNewLookButton.click();
      this.closeQuestionaryButton.waitForDisplayed({ timeout: 4000 });
      this.closeQuestionaryButton.click();
    } catch (error) {
      // Ignore any errors if the dialog is not present
    }

    // Check if the error message is displayed
    // const errorMessage = $('div.error-message');
    // if (errorMessage.isDisplayed()) {
    //   const errorText = errorMessage.getText();
    //   if (errorText.includes('The username or password you entered is incorrect')) {
    //     throw new Error('Invalid username or password');
    //   }
    // }
  } //when the username and password is wrong, make sure a text 
  // pops up that says username or password is wrong      

  submit() {
    this.submitBtn.click();
  }

  loginUser(login, pass) {
    this.username.setValue(login);
    this.password.setValue(pass);
  }

  clicked() {
    this.link.click();
    this.forgot.click();
    this.help.click();
  }

  select() {
    this.helpTextBox.click();
    this.helpTextBox.setValue('How to Assign an Alternate Rate?');
    this.searchIcon.click();
  }
}

export default new LoginPage();
