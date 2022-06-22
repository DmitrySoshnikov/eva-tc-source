/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const Type = require('../src/Type');

const {test} = require('./test-util');

module.exports = eva => {
  // Numbers.
  test(eva, 42, Type.number);

  // Strings.
  test(eva, '"hello"', Type.string);

  // Boolean.
  test(eva, true, Type.boolean);
  test(eva, false, Type.boolean);
};