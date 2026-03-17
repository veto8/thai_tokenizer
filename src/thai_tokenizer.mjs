/**                                                                                       * Module Log2textarea
 * @module Thai_tokenizer
 */
"use strict";
import wordList from "./wordlist.js"; // Import the array

export class Thai_tokenizer {
  /**
Init 
@alias module:Thai_tokenizer
@param {array}  - Extra Wordlist
@example 
* var t = new Thai_tokenizer();
*/

  constructor(extra_wordlist = []) {
    this.wordlist = wordList;
  }

  /**
@alias module:Thai_tokenizer
@param {string}  - text to tokenize
@example
* var t = new Thai_tokenizer();
* t.tokenize("ข้อความนี้ใช้ฟอนต์ Myridia ซึ่งเป็นฟอนต์แบบกำหนดเองที่ฝังไว้โดยใช้")
*/
  async tokenize(w) {
    const d = this.wordlist;
    const arr = [];

    for (let i = 0; i < w.length; ) {
      let sub = [];

      d.forEach((v2) => {
        if (w[i] + w[i + 1] === v2[0] + v2[1]) sub.push([v2, v2.length]);
      });

      sub.sort((a, b) => b[1] - a[1]);

      for (let ii = 0; ii < sub.length; ii++) {
        const l = sub[ii][1] + i;
        const s = w.substring(i, l);

        if (sub[ii][0] === s) {
          i = l - 1;
          arr.push(s);
          ii = sub.length;
        }
      }

      i++;
    }

    return arr;
  }
}
