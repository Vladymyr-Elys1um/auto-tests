class CareersPage {
  get OpenPositionsButton() {
    return $('[href="#positions"]');
  }
  clickOpenPositionsButton() {
    this.OpenPositionsButton.click();
  }

  ConsoleLogAllOpenPositions() {
    console.log(
      "What positions are open? :" + $('[class="pb-md-6"]').getText()
    );
  }
}
module.exports = new CareersPage();
