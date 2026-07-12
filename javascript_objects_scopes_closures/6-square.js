#!/usr/bin/node
const Rectangle = require('./5-square');

class Square extends Rectangle {
  charPrint (c) {
    const char = c === undefined ? 'X' : c;
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += char;
      }
      console.log(row);
    }
  }
}

module.exports = Square;
