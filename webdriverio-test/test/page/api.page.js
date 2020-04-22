class ApiPage {
  get apiClick() {
    return $("//header/div//*[contains(text(),'API')][@href]");
  }

  clickApiPage() {
    this.apiClick.click();
  }

  get contributeClick() {
    return $("//header/div//*[contains(text(),'Contribute')]");
  }
  clickContribute() {
    this.contributeClick.click();
  }
}
module.exports = new ApiPage();
