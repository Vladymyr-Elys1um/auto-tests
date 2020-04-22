class WebdriverioPage {
  get TypeScriptButton() {
    return $('[href ="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
  }
  ClickTypeScriptButton() {
    this.TypeScriptButton.click();
  }
  get IgniteramField() {
    return $("//*[contains(text(),'igniteram/appium')]");
  }
  ClickIgniteramField() {
    this.IgniteramField.click();
  }
}
module.exports = new WebdriverioPage();
