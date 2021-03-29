const CustomError = require("../extensions/custom-error");

const chainMaker = {
  Array: [],
  Result: '',

  getLength() {
    return this.Array.length;
  },

  addLink(value) {
    value !== "" ? this.Array.push('( ' + value + ' )') : this.Array.push('( )');
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) === true && position > 0 && position < this.Array.length) {
      this.Array.splice((position - 1), 1);
    } else {
      this.Array = [];
      throw new Error();
    }
    return this;
  },

  reverseChain() {
    this.Array.reverse();
    return this;
  },

  finishChain() {
    Result = this.Array.join('~~');
    this.Array = [];
    return Result;
  }
};

module.exports = chainMaker;
