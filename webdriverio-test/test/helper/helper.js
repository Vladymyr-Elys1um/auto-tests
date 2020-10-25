class Helper {
  createRandomUserName() {
    return "Username" + Math.floor(Math.random() * 100000);
  }

  createRandomUserMail() {
    return this.createRandomUserName() + "@gmail.com";
  }

  createRandomNumber() {
    return Math.floor(Math.random() * 100000);
  }
}

module.exports = new Helper();
