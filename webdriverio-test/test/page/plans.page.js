const helper = require("../helper/helper.js");

class PlansPage {
  get JoinFreeButton() {
    return $(
      '[class="btn-block btn-mktg h4-mktg"][data-ga-click="Sign up, click to sign up for account, ref_page:/pricing;ref_cta:Join for free;ref_loc:topcarousel"]'
    );
  }
  ClickJoinFreeButton() {
    this.JoinFreeButton.click();
  }

  ////// генерируем рендомные значения и подставляем для username , email, password ////

  get userNamePricing() {
    return $('[class="form-control input py-1"][name="user[login]"]');
  }
  randomUserNameInputPricing() {
    this.userNamePricing.click();
    this.userNamePricing.addValue(helper.createRandomUserName());
  }

  get emailTextPricing() {
    return $('[class="form-control input py-1"][name="user[email]"]');
  }
  randomEmailInputPricing() {
    this.emailTextPricing.click();
    this.emailTextPricing.addValue(helper.createRandomUserMail());
  }

  get passwordPricing() {
    return $('[class="form-control input py-1 "]');
  }
  randomPasswordInputPricing() {
    this.passwordPricing.click();
    this.passwordPricing.addValue(helper.createRandomUserMail());
  }

  get CreateAccoungButton() {
    return $(
      '[class="btn-mktg signup-btn  js-octocaptcha-form-submit width-full"]'
    );
  }
  clickCreateAccountButton() {
    this.CreateAccoungButton.click();
  }
}
module.exports = new PlansPage();
