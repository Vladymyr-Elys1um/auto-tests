const assert = require("assert");

describe("webdriver.io page", () => {
  it("should have the right title", () => {
    browser.url("https://webdriver.io");
    const title = browser.getTitle();
    assert.strictEqual(
      title,
      "WebdriverIO · Next-gen browser automation test framework for Node.js"
    );
  });
});

it("should open url about API", () => {
  browser.url("https://webdriver.io/docs/api.html");
});

it("should open new url in new window", () => {
  const input = $('//*[text()="JSONWire protocol"]');
  let attr = input.getAttribute("href");
  browser.newWindow(attr);
  browser.pause(2000);
});

it("should detect if an element is displayed", () => {
  const aItem = $('strong a[href="/SeleniumHQ/selenium/wiki"]');
  isDisplayed = aItem.isDisplayed();
  console.log("IS DISPLAYED? :" + isDisplayed);
});

it("should open window in new tab", () => {
  browser.switchWindow("https://webdriver.io/docs/api.html");
  browser.pause(2000);
});

it("should wait until text = API Docs", () => {
  browser.waitUntil(
    () => {
      return $(".postHeaderTitle").getText("API Docs");
    },
    5000,
    "API docs is`n displayed"
  );
});

it("should save screenshot sotHeaderTitle", () => {
  const elem = $(".postHeaderTitle");
  elem.saveScreenshot("elemScreenshot.png");
});

it("should detect if a href is displayed", () => {
  const hrefItem = $('a[href="https://twitter.com/webdriverio"]');
  isDisplayed = hrefItem.isDisplayed();
  console.log("IS HREF DISPLAYED? :" + isDisplayed);
});

it("should detect if a href is DisplayedInViewPort", () => {
  let isTwitterDisplayedInViewport = $(
    '#footer [href="https://twitter.com/webdriverio"]'
  ).isDisplayedInViewport();
  console.log("isTwitterDisplayedInViewport:" + isTwitterDisplayedInViewport);
});

it("should scroll window to Twitter", () => {
  const TwitterLink = $('#footer [href="https://twitter.com/webdriverio"]');
  browser.pause(2000);
  TwitterLink.scrollIntoView();
  browser.pause(2000);
});

it("should detect if a href is displayed after scrolling", () => {
  const hrefItem = $('a[href="https://twitter.com/webdriverio"]');
  isDisplayed = hrefItem.isDisplayed();
  console.log("IS HREF DISPLAYED AFTER SCROLL? :" + isDisplayed);
});

it("should  detect if a href is DisplayedInViewPort after scrolling", () => {
  let isTwitterDisplayedInViewport = $(
    '#footer [href="https://twitter.com/webdriverio"]'
  ).isDisplayedInViewport();
  console.log(
    "isTwitterDisplayedInViewport after scroll:" + isTwitterDisplayedInViewport
  );
});

it("should detect isFocused result", () => {
  const input = $('[href="/blog/"]');
  console.log("search.isFocused() before click:" + input.isFocused());
  browser.pause(2000);
  input.click();
  console.log("search.isFocused() after click:" + input.isFocused());
  browser.pause(2000);
});
