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
  it("should open github page and SignUp", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    browser.pause(2000);
    mainPage.randomUserNameInput();
    browser.pause(2000);
    mainPage.randomEmailInput();
    browser.pause(2000);
    mainPage.randomPasswordInput();
    browser.pause(2000);
    mainPage.clickSignUpButton();
  });

  it("should get url and equal it", () => {
    let URL = browser.getUrl();
    assert(URL === "https://github.com/join");
    browser.pause(2000);
    console.log("Is current url equal expected url? :" + URL);
    browser.pause(2000);
    mainPage.IsVerifyItemDisplayed();
  });

  it("should open github page and SignUp from footed", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    browser.pause(2000);
    mainPage.randomUserNameInput2();
    browser.pause(2000);
    mainPage.randomEmailInput2();
    browser.pause(2000);
    mainPage.randomPasswordInput2();
    browser.pause(2000);
    mainPage.clickSignUpButton2();
  });

  it("should open github page and SignIn with test account", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    browser.pause(2000);
    mainPage.clickSignInButton();
    browser.pause(2000);
    mainPage.UserNameInput();
    browser.pause(2000);
    mainPage.PasswordInput();
    browser.pause(2000);
    mainPage.clickSignInButton2();
    browser.pause(2000);
    mainPage.clickExplore();
    mainPage.IsUserNameDisplayed();
    browser.pause(2000);
    mainPage.clickDropdownUserMenu();
    browser.pause(2000);
    mainPage.clickSignOutButton();
  });

  it("should test forgot password with empty email field", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    browser.pause(2000);
    mainPage.clickSignInButton();
    browser.pause(2000);
    mainPage.ClickForgotPasswordButton();
    browser.pause(2000);
    mainPage.ClickSendPasswordButton();
    browser.pause(2000);
  });

  it("should test forgot password with incorrect email field", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    browser.pause(2000);
    mainPage.clickSignInButton();
    browser.pause(2000);
    mainPage.ClickForgotPasswordButton();
    browser.pause(2000);
    mainPage.ClickEmailField();
    mainPage.InputIncorrectEmail();
    browser.pause(2000);
    mainPage.ClickSendPasswordButton();
    browser.pause(2000);
  });

  it("should test forgot password with correct email field", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    browser.pause(2000);
    mainPage.clickSignInButton();
    browser.pause(2000);
    mainPage.ClickForgotPasswordButton();
    browser.pause(2000);
    mainPage.ClickEmailField();
    mainPage.InputCorrectEmail();
    browser.pause(2000);
    mainPage.ClickSendPasswordButton();
    browser.pause(2000);
  });

  it("should test isDisplayed Why GitHub dropdown menu", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    mainPage.ClickWhyGithubDropdownButton();
    mainPage.ClickWhyGithubDropdownButton();
    browser.pause(2000);
    console.log(
      "Is dropdown Why Githubdisplayed? :" +
        $(
          '[class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
        ).isDisplayed()
    );
  });

  ////// test Explore dropdown button /////

  it("should test isDisplayed Explore dropdown menu", () => {
    mainPage.ClickExploreButton();
    browser.pause(2000);
    console.log(
      "Is dropdown Explore displayed? :" +
        $(
          '[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
        ).isDisplayed()
    );
    browser.pause(2000);
  });

  //// test Plans dropdown + going to Join Free /////
  it("should click on Plans from Pricing dropdown", () => {
    mainPage.ClickPricingDropdownButton();
    browser.pause(2000);
    console.log(
      "Is dropdown Pricing displayed? :" +
        $(
          '[class= "dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]'
        ).isDisplayed()
    );
    browser.pause(2000);
    mainPage.ClickPlansButton();
  });

  //// подвязка под предыдущий тест, начинается со страницы Планов и переходит на JoinFree ////

  it("should JoinFree and fill out all fields", () => {
    browser.pause(2000);
    plansPage.ClickJoinFreeButton();
    browser.pause(2000);
    plansPage.randomUserNameInputPricing();
    browser.pause(2000);
    plansPage.randomEmailInputPricing();
    browser.pause(2000);
    plansPage.randomPasswordInputPricing();
    browser.pause(2000);
    plansPage.clickCreateAccountButton();
  });

  it("should open Explore dropdown list and navigate to Explore Github -> Topics -> Say, that Topics isDisplayed", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    mainPage.ClickExploreButton();
    mainPage.ClickExploreButton();
    browser.pause(2000);
    mainPage.ClickExploreGithubButton();
    browser.pause(2000);
    explorePage.ClickTopicsButton();
    browser.pause(2000);
    explorePage.IsTopicsArticleDisplayed();
  });

  ///// начинает нырять через строку поиска глубже в лес /////
  it("should input text in Searchbar and find type script", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    browser.pause(2000);
    mainPage.AddValueToSearchInputField();
    browser.pause(2000);
    mainPage.ClickSearchButton();
    browser.pause(2000);
    webdriverioPage.ClickTypeScriptButton();
    browser.pause(2000);
    webdriverioPage.ClickIgniteramField();
    let URL = browser.getUrl();
    assert(
      URL === "https://github.com/igniteram/appium-webdriverio-typescript"
    );
    browser.pause(2000);
    console.log("Is url has webdriverio text? :" + URL);
    browser.pause(2000);
  });

  it("should start free trial at Enterprise page", () => {
    browser.url("https://github.com/enterprise");
    browser.pause(2000);
    browser.maximizeWindow();
    enterprisePage.ClickStartFreeTrialButton();
    browser.pause(2000);
    enterprisePage.ClickEnterpriseCloudButton();
    browser.pause(2000);
    enterprisePage.randomUserNameEnterpriseInput();
    browser.pause(2000);
    enterprisePage.randomEmailEnterpriseInput();
    browser.pause(2000);
    enterprisePage.randomPasswordEnterpriseInput();
    browser.pause(2000);
    enterprisePage.clickCreateAccountEnterprise();
    browser.pause(2000);
  });

  it("should start free trial at EnterpriseServer page", () => {
    browser.back();
    browser.pause(2000);
    browser.back();
    browser.pause(2000);
    enterprisePage.ClickEnterpriseServerButton();
    browser.pause(2000);
    enterprisePage.randomUserNameEnterpriseServerInput();
    browser.pause(2000);
    enterprisePage.randomCompanyNameEnterpriseServerInput();
    browser.pause(2000);
    enterprisePage.randomEmailEnterpriseServerInput();
    browser.pause(2000);
    enterprisePage.randomCompanyPhoneNumberInput();
    browser.pause(2000);
    enterprisePage.clickMicrosoftAzuteButton();
    browser.pause(2000);
    enterprisePage.clickYesRadiobutton();
    browser.pause(2000);
    enterprisePage.AddValueQField();
    browser.pause(2000);
    enterprisePage.ClickAcceptTermsButton();
    browser.pause(2000);
    enterprisePage.clickCreateAccountEnterpriseServer();
    browser.pause(2000);
  });

  it("should go to footer -> careers-> open position and log all lables", () => {
    browser.url("https://github.com/");
    browser.pause(2000);
    browser.maximizeWindow();
    mainPage.clickCareersButton();
    browser.pause(2000);
    careersPage.clickOpenPositionsButton();
    browser.pause(2000);
    careersPage.ConsoleLogAllOpenPositions();
    browser.pause(2000);
  });
});

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
