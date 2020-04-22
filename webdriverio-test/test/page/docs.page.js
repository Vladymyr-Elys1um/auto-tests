class DocsPage {
  get docsClick() {
    return $("//*[contains(text(),'Docs')][@href]");
  }

  clickDocsPage() {
    this.docsClick.click();
  }

  get editButton() {
    return $(".edit-page-link.button");
  }
  clickEditButton() {
    this.editButton.click();
  }
}
module.exports = new DocsPage();
