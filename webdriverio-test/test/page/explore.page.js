class ExplorePage {
  get TopicsButton() {
    return $("//main//*[contains(text(),'Topics')]");
  }
  ClickTopicsButton() {
    this.TopicsButton.click();
  }

  IsTopicsArticleDisplayed() {
    console.log(
      "Is Tipics article displayed? :" + $('[class="h0-mktg"]').isDisplayed()
    );
  }
}
module.exports = new ExplorePage();
