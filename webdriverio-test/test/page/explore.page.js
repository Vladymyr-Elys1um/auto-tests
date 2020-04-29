class ExplorePage {
  get TopicsButton() {
    return $("//main//*[contains(text(),'Topics')]");
  }
  ClickTopicsButton() {
    this.TopicsButton.click();
  }
}
module.exports = new ExplorePage();
