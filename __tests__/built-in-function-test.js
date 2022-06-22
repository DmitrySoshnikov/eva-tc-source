/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const {test} = require('./test-util');
const Type = require('../src/Type');

module.exports = eva => {

  test(eva, `(sum 1 5)`, Type.number);

  test(eva, `(sum (square 2) 4)`, Type.number);

};