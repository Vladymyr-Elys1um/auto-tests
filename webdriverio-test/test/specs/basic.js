const assert = require("assert");
const mainPage = require("../page/main.page.js");
const docsPage = require("../page/docs.page.js");
const apiPage = require("../page/api.page.js");
const helpPage = require("../page/help.page.js");
const versionPage = require("../page/version.page.js");
const plansPage = require("../page/plans.page.js");
const explorePage = require("../page/explore.page.js");
const webdriverioPage = require("../page/webdriverio.page.js");
const enterprisePage = require("../page/enterprise.page.js");
const careersPage = require("../page/careers.page.js");

describe("webdriver.io page", () => {
  beforeEach(function it() {
    do {
      browser.url("https://github.com/");
      browser.deleteCookies();
    } while ($('[class="rounded-1 text-gray bg-gray-light py-4 px-4 px-md-3 px-lg-4"]')
      .isDisplayed() === false);
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
    const userNameItem = $('[class="d-block f3 text-gray text-normal"]');
    expect(userNameItem).toBeDisplayed();
    mainPage.clickDropdownUserMenu();
    mainPage.clickSignOutButton();
  });

  it("should test forgot password with empty email field", () => {
    mainPage.clickSignInButton();
    mainPage.ClickForgotPasswordButton();
    mainPage.ClickSendPasswordButton();
    const resetPasswordError = $('[class= "container-lg px-2"]');
    expect(resetPasswordError).toBeDisplayed();
  });

  it("should test forgot password with incorrect email field", () => {
    mainPage.clickSignInButton();
    mainPage.ClickForgotPasswordButton();
    mainPage.ClickEmailField();
    mainPage.InputIncorrectEmail();
    mainPage.ClickSendPasswordButton();
    const resetPasswordError = $('[class= "container-lg px-2"]');
    expect(resetPasswordError).toBeDisplayed();
  });

  it("should test forgot password with correct email field", () => {
    mainPage.clickSignInButton();
    mainPage.ClickForgotPasswordButton();
    mainPage.ClickEmailField();
    mainPage.InputCorrectEmail();
    mainPage.ClickSendPasswordButton();
    const checkEmailMessage = $('[class= "mt-0"]');
    expect(checkEmailMessage).toBeDisplayed();
  });

  it("should test isDisplayed Why GitHub dropdown menu", () => {
    mainPage.clickWhyGithubDropdownButton();
    mainPage.clickWhyGithubDropdownButton();
    const whyGithubDropdown = $(
      '[class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
    );
    expect(whyGithubDropdown).toBeDisplayed();
  });

  // ////// test Explore dropdown button /////

  it("should test isDisplayed Explore dropdown menu", () => {
    mainPage.clickWhyGithubDropdownButton();
    mainPage.clickWhyGithubDropdownButton();
    mainPage.clickExploreButton();
    const exploreDropdown = $(
      '[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
    );
    expect(exploreDropdown).toBeDisplayed();
  });

  // //// test Plans dropdown + going to Join Free /////
  it("should click on Plans from Pricing dropdown", () => {
    mainPage.clickPricingDropdownButton();
    mainPage.clickPricingDropdownButton();
    const pricingButton = $(
      '[class= "dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
    );
    expect(pricingButton).toBeDisplayed();
    mainPage.ClickPlansButton();
  });

  // //// подвязка под предыдущий тест, начинается со страницы Планов и переходит на JoinFree ////

  it("should JoinFree and fill out all fields", () => {
    mainPage.clickPricingDropdownButton();
    mainPage.clickPricingDropdownButton();
    mainPage.ClickPlansButton();
    plansPage.ClickJoinFreeButton();
    plansPage.randomUserNameInputPricing();
    plansPage.randomEmailInputPricing();
    plansPage.randomPasswordInputPricing();
    // plansPage.clickCreateAccountButton();
    expect(browser).toHaveUrl("https://github.com/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=topcarousel&ref_page=%2Fpricing&source=pricing-card-free");
  });

  it("should open Explore dropdown list and navigate to Explore Github -> Topics -> Say, that Topics isDisplayed", () => {
    mainPage.clickExploreButton();
    mainPage.ClickExploreGithubButton();
    explorePage.ClickTopicsButton();
    const topicsArticle = $('[class= "h0-mktg"]');
    expect(topicsArticle).toBeDisplayed();
  });

  // ///// начинает нырять через строку поиска глубже в лес /////
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
    // enterprisePage.clickCreateAccountEnterprise();
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
    // enterprisePage.clickCreateAccountEnterpriseServer();
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

/*xit("should open API page", () => {
    browser.url("https://webdriver.io");
    apiPage.clickApiPage();
    browser.pause(2000);
    apiPage.clickContribute();
    browser.pause(2000);
  });

  xit("should open Help page", () => {
    browser.pause(2000);
    helpPage.clickHelpPage();
    browser.pause(2000);
    helpPage.isDisplayedPText();
  });

  xit("should open Version page", () => {
    browser.url("https://webdriver.io");
    versionPage.clickVersionPage();
    browser.pause(2000);
    versionPage.clickPastVersion();
    browser.pause(2000);
    versionPage.clickDocumentationV5();
    browser.pause(2000);
  });
});

  it("should demonstrate the addValue command", () => {
    browser.url("https://webdriver.io");
    mainPage.searchInput.addValue("test");
    browser.pause(2000);
    mainPage.setUserName("type with method");
    browser.pause(2000);
  });

  it("should click Docs button", () => {
    docsPage.clickDocsPage();
    browser.pause(2000);
    docsPage.clickEditButton();
    browser.pause(2000);
  });
});

xit("should have the right title", () => {
  browser.url("https://webdriver.io");
  const title = browser.getTitle();
  assert.strictEqual(
    title,
    "WebdriverIO · Next-gen browser automation test framework for Node.js"
  );
});

xit("should open url about API", () => {
  browser.url("https://webdriver.io/docs/api.html");
  browser.maximizeWindow();
});

xit("should open new url in new window", () => {
  const input = $('//*[text()="JSONWire protocol"]');
  let attr = input.getAttribute("href");
  browser.newWindow(attr);
  browser.pause(2000);
});

xit("should detect if an element is displayed", () => {
  const aItem = $('strong a[href="/SeleniumHQ/selenium/wiki"]');
  isDisplayed = aItem.isDisplayed();
  console.log("IS DISPLAYED? :" + isDisplayed);
});

xit("should open window in new tab", () => {
  browser.switchWindow("https://webdriver.io/docs/api.html");
  browser.pause(2000);
});

xit("should wait until text = API Docs", () => {
  browser.waitUntil(
    () => {
      return $(".postHeaderTitle").getText("API Docs");
    },
    5000,
    "API docs is`n displayed"
  );
});

xit("should save screenshot sotHeaderTitle", () => {
  const elem = $(".postHeaderTitle");
  elem.saveScreenshot("elemScreenshot.png");
});

xit("should detect if a href is displayed", () => {
  const hrefItem = $('a[href="https://twitter.com/webdriverio"]');
  isDisplayed = hrefItem.isDisplayed();
  console.log("IS HREF DISPLAYED? :" + isDisplayed);
});

xit("should detect if a href is DisplayedInViewPort", () => {
  let isTwitterDisplayedInViewport = $(
    '#footer [href="https://twitter.com/webdriverio"]'
  ).isDisplayedInViewport();
  console.log("isTwitterDisplayedInViewport:" + isTwitterDisplayedInViewport);
});

xit("should scroll window to Twitter", () => {
  const TwitterLink = $('#footer [href="https://twitter.com/webdriverio"]');
  browser.pause(2000);
  TwitterLink.scrollIntoView();
  browser.pause(2000);
});

xit("should detect if a href is displayed after scrolling", () => {
  const hrefItem = $('a[href="https://twitter.com/webdriverio"]');
  isDisplayed = hrefItem.isDisplayed();
  console.log("IS HREF DISPLAYED AFTER SCROLL? :" + isDisplayed);
});

xit("should  detect if a href is DisplayedInViewPort after scrolling", () => {
  let isTwitterDisplayedInViewport = $(
    '#footer [href="https://twitter.com/webdriverio"]'
  ).isDisplayedInViewport();
  console.log(
    "isTwitterDisplayedInViewport after scroll:" + isTwitterDisplayedInViewport
  );
});

xit("should detect isFocused result", () => {
  const input = $('[href="/blog/"]');
  console.log("search.isFocused() before click:" + input.isFocused());
  browser.pause(2000);
  input.click();
  console.log("search.isFocused() after click:" + input.isFocused());
  browser.pause(2000);
});
*/
