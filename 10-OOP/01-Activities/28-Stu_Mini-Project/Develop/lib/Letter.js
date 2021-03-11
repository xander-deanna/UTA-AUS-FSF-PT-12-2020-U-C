class Letter {
  constructor (input) {
    this.input = input;
    if (this.input === "?") {
        this.visible = true;
    }
    else {
        this.visible = false;
        input.toString() 
    }

  }
  guess () {

  }
  getSolution () {
      return this.input
  }

}

module.exports = Letter;
