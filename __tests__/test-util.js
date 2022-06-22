/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const assert = require('assert');
const evaParser = require('../parser/evaParser');

function exec(eva, exp) {
  if (typeof exp === 'string') {
    exp = evaParser.parse(`(begin ${exp})`);
  }
  return eva.tcGlobal(exp);
}

function test(eva, exp, expected) {
  const actual = exec(eva, exp);
  try {
    assert.strictEqual(actual.equals(expected), true);
  } catch (e) {
    console.log(`\nExpected ${expected} type for ${exp}, but got ${actual}.\n`);
    throw e;
  }
}

module.exports = {
  exec,
  test,
};