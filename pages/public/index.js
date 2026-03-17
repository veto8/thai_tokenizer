import { Thai_tokenizer } from "./dist/thai_tokenizer.esm.js";

let t = new Thai_tokenizer();

const r = await t.tokenize("ชายคนหนึ่งเดินลงไปตามถนน");
console.log(r);
