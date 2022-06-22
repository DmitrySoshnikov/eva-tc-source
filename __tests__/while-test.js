/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const Type = require('../src/Type');

const {exec, test} = require('./test-util');

module.exports = eva => {

  test(eva,
  `

    (var x 10)

    (while (!= x 0)
      (set x (- x 1)))

    x

  `,
  Type.number);

};