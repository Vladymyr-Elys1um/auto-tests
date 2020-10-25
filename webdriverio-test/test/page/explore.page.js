class ExplorePage {
  get TopicsButton() {
    return $("//main//*[contains(text(),'Topics')]");
  }
  ClickTopicsButton() {
    this.TopicsButton.click();
  }

  gettopicsArticle() {
    return $('[class="h0-mktg"]');
  }
}
module.exports = new ExplorePage();
