/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const Type = require('../src/Type');

const {exec, test} = require('./test-util');

module.exports = eva => {

  test(eva, `(<= 1 10)`, Type.boolean);

  // If expression: both branches
  // should return the same type.

  test(eva,
  `

    (var x 10)
    (var y 20)

    (if (<= x 10)
      (set y 1)
      (set y 2))

    y

  `,
  Type.number);

};