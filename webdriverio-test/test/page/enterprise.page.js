class EnterprisePage {
  get StartFreeTrialButton() {
    return $('[class="btn-mktg btn-large-mktg mb-2"]');
  }
  ClickStartFreeTrialButton() {
    this.StartFreeTrialButton.click();
  }

  get EnterpriseTopButton() {
    return $(
      '[class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"][data-ga-click="(Logged out) Header, go to Enterprise"]'
    );
  }
  clickEnterpriseTopButton() {
    this.EnterpriseTopButton.moveTo();
    this.EnterpriseTopButton.click();
  }

  get EnterpriseCloudButton() {
    return $(
      '[class="currency-container col-12 signup-plan-column js-details-container mr-sm-2 "]'
    );
  }
  ClickEnterpriseCloudButton() {
    this.EnterpriseCloudButton.click();
  }
  get EnterpriseServerButton() {
    return $(
      '[class="currency-container col-12 signup-plan-column js-details-container"]'
    );
  }
  ClickEnterpriseServerButton() {
    this.EnterpriseServerButton.click();
  }

  //////////////// генерация и ввод случайных данных в поля регистрации ///////
  get userNameEnterprise() {
    return $("#user_login");
  }
  randomUserNameEnterpriseInput() {
    this.userNameEnterprise.click();
    this.userNameEnterprise.addValue(
      "Username" + Math.floor(Math.random() * 100000)
    );
  }

  get emailTextEnteprise() {
    return $("#user_email");
  }
  randomEmailEnterpriseInput() {
    this.emailTextEnteprise.click();
    this.emailTextEnteprise.addValue(
      "Username" + Math.floor(Math.random() * 100000) + "@gmail.com"
    );
  }

  get passwordEnterprise() {
    return $("#user_password");
  }
  randomPasswordEnterpriseInput() {
    this.passwordEnterprise.click();
    this.passwordEnterprise.addValue(
      "Username" + Math.floor(Math.random() * 100000)
    );
  }

  get CreateAccountEnterpriseButton() {
    return $(
      '[class="btn-mktg signup-btn  js-octocaptcha-form-submit width-full"]'
    );
  }
  clickCreateAccountEnterprise() {
    this.CreateAccountEnterpriseButton.click();
  }

  ///////////////// теперь генерация , клики и ввод данных для регистрации EnterpriseServer ////////////////

  get userNameEnterpriseServer() {
    return $("#contact_request_name");
  }
  randomUserNameEnterpriseServerInput() {
    this.userNameEnterpriseServer.click();
    this.userNameEnterpriseServer.addValue(
      "Username" + Math.floor(Math.random() * 100000)
    );
  }

  get emailTextEntepriseServer() {
    return $("#contact_request_email");
  }
  randomEmailEnterpriseServerInput() {
    this.emailTextEntepriseServer.click();
    this.emailTextEntepriseServer.addValue(
      "Username" + Math.floor(Math.random() * 100000) + "@gmail.com"
    );
  }

  get CompanyNameEnterpriseServer() {
    return $("#contact_request_organization_name");
  }
  randomCompanyNameEnterpriseServerInput() {
    this.CompanyNameEnterpriseServer.click();
    this.CompanyNameEnterpriseServer.addValue(
      "CompanyName" + Math.floor(Math.random() * 100000)
    );
  }

  get PhoneNumberEnterprise() {
    return $("#contact_request_phone");
  }
  randomCompanyPhoneNumberInput() {
    this.PhoneNumberEnterprise.click();
    this.PhoneNumberEnterprise.addValue(
      Math.floor(Math.random() * 10000000000)
    );
  }

  get MicrosoftAzuteButton() {
    return $("#contact_request_instance_type_azure");
  }
  clickMicrosoftAzuteButton() {
    this.MicrosoftAzuteButton.click();
  }

  get YesButton() {
    return $("#questions_yes");
  }
  clickYesRadiobutton() {
    this.YesButton.click();
  }

  get QuestionsListField() {
    return $("#questions-list");
  }
  AddValueQField() {
    this.QuestionsListField.addValue(
      "I just wanna say THANK YOU for this test experience"
    );
  }

  get AcceptTermsButton() {
    return $("#contact_request_agreed_to_terms");
  }
  ClickAcceptTermsButton() {
    this.AcceptTermsButton.click();
  }

  get CreateAccountServerButton() {
    return $("#signup-form");
  }
  clickCreateAccountEnterpriseServer() {
    this.CreateAccountServerButton.click();
  }
}
module.exports = new EnterprisePage();
