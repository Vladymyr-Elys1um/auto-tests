class VersionPage {
  get versionClick() {
    return $("//*[contains(text(),'Version')]");
  }

  clickVersionPage() {
    this.versionClick.click();
  }

  get pastVersionClick() {
    return $("//*[contains(text(),'Past Version')][@href]/..");
  }
  clickPastVersion() {
    this.pastVersionClick.click();
  }
  get documentationV5Click() {
    return $("//*[contains(text(),'v5')]/..//td[2]/a");
  }
  clickDocumentationV5() {
    this.documentationV5Click.click();
  }
}
module.exports = new VersionPage();
