const assert = require("assert");
const mainPage = require("../page/main.page.js");
const plansPage = require("../page/plans.page.js");
const explorePage = require("../page/explore.page.js");
const webdriverioPage = require("../page/webdriverio.page.js");
const enterprisePage = require("../page/enterprise.page.js");
// импорт для файлов с examples.js
// const docsPage = require("../page/docs.page.js");
// const apiPage = require("../page/api.page.js");
// const helpPage = require("../page/help.page.js");
// const versionPage = require("../page/version.page.js");
// const careersPage = require("../page/careers.page.js");

describe("webdriver.io page", () => {
  beforeEach(function it() {
    do {
      browser.url("https://github.com/");
      browser.deleteCookies();
    } while (mainPage.getBrokenPage().isDisplayed() === false);
    browser.maximizeWindow();
  });

  it("should open github page and SignUp", () => {
    mainPage.randomUserNameInput();
    mainPage.randomEmailInput();
    mainPage.randomPasswordInput();
    mainPage.clickSignUpButton();
    expect(browser).toHaveUrl("https://github.com/join");
  });

  it("should open github page and SignUp from footed", () => {
    mainPage.randomUserNameInput2();
    mainPage.randomEmailInput2();
    mainPage.randomPasswordInput2();
    mainPage.clickSignUpButton2();
    expect(browser).toHaveUrl("https://github.com/join");
  });

  it("should open github page and SignIn with test account", () => {
    mainPage.clickSignInButton();
    mainPage.UserNameInput();
    mainPage.PasswordInput();
    mainPage.clickSignInButton2();
    mainPage.clickExplore();
    expect(mainPage.getUserNameItem()).toBeDisplayed();
    mainPage.clickDropdownUserMenu();
    mainPage.clickSignOutButton();
  });

  it("should test forgot password with empty email field", () => {
    mainPage.clickSignInButton();
    mainPage.ClickForgotPasswordButton();
    mainPage.ClickSendPasswordButton();
    expect(mainPage.getResetPasswordError()).toBeDisplayed();
  });

  it("should test forgot password with incorrect email field", () => {
    mainPage.clickSignInButton();
    mainPage.ClickForgotPasswordButton();
    mainPage.ClickEmailField();
    mainPage.InputIncorrectEmail();
    mainPage.ClickSendPasswordButton();
    expect(mainPage.getResetPasswordError()).toBeDisplayed();
  });

  it("should test forgot password with correct email field", () => {
    mainPage.clickSignInButton();
    mainPage.ClickForgotPasswordButton();
    mainPage.ClickEmailField();
    mainPage.InputCorrectEmail();
    mainPage.ClickSendPasswordButton();
    expect(mainPage.getCheckEmailMessage()).toBeDisplayed();
  });

  it("should test isDisplayed Why GitHub dropdown menu", () => {
    mainPage.clickWhyGithubDropdownButton();
    mainPage.clickWhyGithubDropdownButton();
    expect(mainPage.getWhyGithubDropdown()).toBeDisplayed();
  });

  // test Explore dropdown button /////

  it("should test isDisplayed Explore dropdown menu", () => {
    mainPage.clickWhyGithubDropdownButton();
    mainPage.clickWhyGithubDropdownButton();
    mainPage.clickExploreButton();
    expect(mainPage.getExploreDropdown()).toBeDisplayed();
  });

  // test Plans dropdown + going to Join Free /////
  it("should click on Plans from Pricing dropdown", () => {
    mainPage.clickPricingDropdownButton();
    mainPage.clickPricingDropdownButton();
    expect(mainPage.getPricingButton()).toBeDisplayed();
    mainPage.ClickPlansButton();
  });

  // подвязка под предыдущий тест, начинается со страницы Планов и переходит на JoinFree ////

  it("should JoinFree and fill out all fields", () => {
    mainPage.clickPricingDropdownButton();
    mainPage.clickPricingDropdownButton();
    mainPage.ClickPlansButton();
    plansPage.ClickJoinFreeButton();
    plansPage.randomUserNameInputPricing();
    plansPage.randomEmailInputPricing();
    plansPage.randomPasswordInputPricing();
    expect(browser).toHaveUrl(
      "https://github.com/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=topcarousel&ref_page=%2Fpricing&source=pricing-card-free"
    );
  });

  it("should open Explore dropdown list and navigate to Explore Github -> Topics -> Say, that Topics isDisplayed", () => {
    mainPage.clickExploreButton();
    mainPage.ClickExploreGithubButton();
    explorePage.ClickTopicsButton();
    expect(explorePage.gettopicsArticle()).toBeDisplayed();
  });

  //  начинает нырять через строку поиска глубже в лес
  it("should input text in Searchbar and find type script", () => {
    mainPage.AddValueToSearchInputField();
    mainPage.ClickSearchButton();
    webdriverioPage.ClickTypeScriptButton();
    webdriverioPage.ClickIgniteramField();
    browser.getUrl();
    expect(browser).toHaveUrl(
      "https://github.com/igniteram/appium-webdriverio-typescript"
    );
  });

  it("should start free trial at Enterprise page", () => {
    enterprisePage.clickEnterpriseTopButton();
    enterprisePage.ClickStartFreeTrialButton();
    enterprisePage.ClickEnterpriseCloudButton();
    enterprisePage.randomUserNameEnterpriseInput();
    enterprisePage.randomEmailEnterpriseInput();
    enterprisePage.randomPasswordEnterpriseInput();
    browser.back();
    browser.back();
    enterprisePage.ClickStartFreeTrialButton();
    enterprisePage.ClickEnterpriseServerButton();
    enterprisePage.randomUserNameEnterpriseServerInput();
    enterprisePage.randomCompanyNameEnterpriseServerInput();
    enterprisePage.randomEmailEnterpriseServerInput();
    enterprisePage.randomCompanyPhoneNumberInput();
    enterprisePage.clickMicrosoftAzuteButton();
    enterprisePage.clickYesRadiobutton();
    enterprisePage.AddValueQField();
    enterprisePage.ClickAcceptTermsButton();
    enterprisePage.ClickAcceptLicenseAggrementBtn();
    expect(
      browser
    ).toHaveUrl(
      "https://enterprise.github.com/trial?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise&source=pricing-card-enterprise",
      { containing: true }
    );
  });

  // it("should go to footer -> careers-> open position and log all lables", () => {
  //   mainPage.clickCareersButton();
  //   careersPage.clickOpenPositionsButton();
  //   careersPage.ConsoleLogAllOpenPositions();
  //   const careersPositions = $('[class= "pb-md-6"]');
  //   expect(careersPositions).toBeDisplayed();
  // });
});

//////////////////////////////////////////////////////////////////////////////////////////
