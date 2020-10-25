const helper = require("../helper/helper.js");
class MainPage {
  get searchInput() {
    return $("#search_input_react");
  }
  setUserName(value) {
    this.searchInput.addValue(value);
  }

  //////////// main page registration //////////////
  get emailTextBx() {
    return $(
      '[class="form-control form-control-lg input-block js-email-notice-trigger"][name="user[email]"]'
    );
  }
  randomEmailInput() {
    this.emailTextBx.click();
    this.emailTextBx.addValue(helper.createRandomUserMail());
  }

  get userNameBx() {
    return $(
      '[class="form-control form-control-lg input-block"][name="user[login]"]'
    );
  }
  randomUserNameInput() {
    this.userNameBx.click();
    this.userNameBx.addValue(helper.createRandomUserName());
  }

  get passwordBx() {
    return $(
      '[class="form-control form-control-lg input-block"][name="user[password]"]'
    );
  }
  randomPasswordInput() {
    this.passwordBx.click();
    this.passwordBx.addValue(helper.createRandomUserMail());
  }

  get signUpButton() {
    return $(
      '[class="btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3"]'
    );
  }
  clickSignUpButton() {
    this.signUpButton.click();
  }

  ///////////////// URL is equal? /////////////

  IsUrlEqual() {
    let URL = browser.getUrl();
    assert(URL === "https://github.com/join");
    console.log("Is current url equal expected url? :" + URL);
  }

  IsVerifyItemDisplayed() {
    const elem = $("//*[contains(text(),'Verify your account')]");
    expect(elem).toBeDisplayed();
  }

  ////////////////////////  footer registarion /////////////////////

  get emailTextBx2() {
    return $(
      '[class="form-control form-control-lg input-block input-lg js-email-notice-trigger"][name="user[email]"]'
    );
  }
  randomEmailInput2() {
    this.emailTextBx2.click();
    this.emailTextBx2.addValue(helper.createRandomUserMail());
  }

  get userNameBx2() {
    return $(
      '[class="form-control form-control-lg input-block input-lg"][name="user[login]"]'
    );
  }
  randomUserNameInput2() {
    this.userNameBx2.scrollIntoView();
    this.userNameBx2.click();
    this.userNameBx2.addValue(helper.createRandomUserName());
  }

  get passwordBx2() {
    return $(
      '[class="form-control form-control-lg input-block input-lg"][name="user[password]"]'
    );
  }
  randomPasswordInput2() {
    this.passwordBx2.click();
    this.passwordBx2.addValue(helper.createRandomUserMail());
  }

  get SignUpButton2() {
    return $('[class="btn-mktg btn-primary-mktg btn-block mt-n1"]');
  }
  clickSignUpButton2() {
    this.SignUpButton2.click();
  }

  ///////// SignIn /////////////

  get SignInButton() {
    return $('[class="HeaderMenu-link no-underline mr-3"]');
  }
  clickSignInButton() {
    this.SignInButton.click();
  }

  ////////// Inputing account lolig + password ////////////

  get userNameBx3() {
    return $('[class="form-control input-block"]');
  }
  UserNameInput() {
    this.userNameBx3.scrollIntoView();
    this.userNameBx3.click();
    this.userNameBx3.addValue("TestingWithLove");
  }

  get passwordBx3() {
    return $('[class="form-control form-control input-block"]');
  }
  PasswordInput() {
    this.passwordBx3.click();
    this.passwordBx3.addValue("Tester785612");
  }

  get SignInButton2() {
    return $('[class="btn btn-primary btn-block"]');
  }
  clickSignInButton2() {
    this.SignInButton2.click();
  }

  ////////// click on avatar /////////
  get ExploreClick() {
    return $(
      '[class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15"][href="/explore"]'
    );
  }
  clickExplore() {
    this.ExploreClick.click();
  }

  get DropdownUserMenu() {
    return $('[data-ga-click="Header, show menu, icon:avatar"]');
  }
  clickDropdownUserMenu() {
    this.DropdownUserMenu.click();
  }
  get SignOutButton() {
    return $('[class="logout-form"]');
  }
  clickSignOutButton() {
    this.SignOutButton.click();
  }

  ////////// forgot passwor /////////
  get ForgotPasswordButton() {
    return $("//*[contains(text(),'Forgot password?')]");
  }
  ClickForgotPasswordButton() {
    this.ForgotPasswordButton.click();
  }

  get SendPasswordButton() {
    return $('[class="btn btn-primary btn-block"]');
  }
  ClickSendPasswordButton() {
    this.SendPasswordButton.click();
  }

  get InputEmailField() {
    return $('[class="form-control input-block"]');
  }
  ClickEmailField() {
    this.InputEmailField.click();
  }
  InputIncorrectEmail() {
    this.InputEmailField.click();
    this.InputEmailField.addValue("test-without-correct-email");
  }

  InputCorrectEmail() {
    this.InputEmailField.click();
    this.InputEmailField.addValue("vladymyr_raid4@ukr.net");
  }

  ////////////// Выпадающиее элементы на главной странице ///////////
  get freeSpace() {
    return $('[class="py-6 py-sm-8 jumbotron-codelines"]');
  }
  get WhyGithubDropdown() {
    return $("//*[contains(text(),'Why GitHub?')]");
  }
  clickWhyGithubDropdownButton() {
    this.freeSpace.moveTo();
    this.WhyGithubDropdown.moveTo();
  }

  ////////// Выпадающее меню Pricing //////////////
  get PricingDropdownButton() {
    return $("//header//*[contains(text(),'Pricing')]");
  }
  clickPricingDropdownButton() {
    this.freeSpace.moveTo();
    this.PricingDropdownButton.moveTo();
  }
  get PlansButton() {
    return $(
      '[class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover"]'
    );
  }
  ClickPlansButton() {
    this.PlansButton.click();
  }

  get ExploreButton() {
    return $("//summary[contains(text(),'Explore')]");
  }
  clickExploreButton() {
    this.freeSpace.moveTo();
    this.ExploreButton.moveTo();
  }

  get ExploreGithubButton() {
    return $("//*[contains(text(),'Explore GitHub')]");
  }
  ClickExploreGithubButton() {
    this.ExploreGithubButton.click();
  }
  get SearchInputField() {
    return $(
      '[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]'
    );
  }
  ClickSearchInputField() {
    this.SearchInputField.click();
  }
  AddValueToSearchInputField() {
    this.SearchInputField.addValue("webdriverio");
  }
  get SearchButton() {
    return $('[class="js-jump-to-badge-search-text-global"]');
  }
  ClickSearchButton() {
    this.SearchButton.click();
  }

  get CareersButton() {
    return $('[data-ga-click="Footer, go to careers, text:careers"]');
  }
  clickCareersButton() {
    this.CareersButton.scrollIntoView();
    this.CareersButton.click();
  }

  /*registrationMenuAvailable() {
    do (browser.reloadSession()) 
    while ($('[class="rounded-1 text-gray bg-gray-light py-4 px-4 px-md-3 px-lg-4"]').isDisplayed() == false);
  } */
  getPricingButton() {
    return $(
      '[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
    );
  }

  getExploreDropdown() {
    return $(
      '[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
    );
  }

  getWhyGithubDropdown() {
    return $(
      '[class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
    );
  }

  getCheckEmailMessage() {
    return $('[class="mt-0"]');
  }

  getResetPasswordError() {
    return $('[class="container-lg px-2"]');
  }

  getUserNameItem() {
    return $('[class="d-block f3 text-gray text-normal"]');
  }

  getBrokenPage() {
    return $(
      '[class="rounded-1 text-gray bg-gray-light py-4 px-4 px-md-3 px-lg-4"]'
    );
  }
}

module.exports = new MainPage();
