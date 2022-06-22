/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const Type = require('../src/Type');

const {test} = require('./test-util');

module.exports = eva => {

  // Variable declaration:
  test(eva, ['var', 'x', 10], Type.number);

  // Variable declaration with type check:
  test(eva, ['var', ['y', 'number'], 'x'], Type.number);

  // Variable access:
  test(eva, 'x', Type.number);
  test(eva, 'y', Type.number);

  // Global variable:
  test(eva, 'VERSION', Type.string);

};