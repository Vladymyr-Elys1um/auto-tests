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
