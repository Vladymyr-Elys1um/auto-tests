class HelpPage {
  get helpClick() {
    return $("//header/div//*[contains(text(),'Help')][@href]");
  }

  clickHelpPage() {
    this.helpClick.click();
  }

  isDisplayedPText() {
    console.log(
      "Is p-text displayed? :" +
        $('//*[contains(text(),"Browse Docs")]').isDisplayed()
    );
  }
}
module.exports = new HelpPage();
