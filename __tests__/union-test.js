/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const {exec, test} = require('./test-util');
const Type = require('../src/Type');

module.exports = eva => {

  exec(eva,
  `
    (type value (or number string))

    (type ID (or string number))

  `);

  test(eva,
  `
    (var (x value) 10)

    x

  `,
  Type.value);

  test(eva,
  `
    x
  `,
  Type.number);

  test(eva,
  `
    x
  `,
  Type.string);

  test(eva,
  `
    (var (y value) "hello")

    y

  `,
  Type.value);

  test(eva,
  `
    (var (a value) 10)
    (var (b ID) "x")

    (def process ((id ID)) -> number
      (+ a id))

    (process b)

    (+ a b)

  `,
  Type.number);

  test(eva,
  `

    (def accept ((x value)) -> value
      (begin
        (if (== (typeof x) "number")
            (- 1 x)
            (+ "y" x))))

    (accept 10)

  `,
  Type.number);

  test(eva,
  `

    (accept "x")

  `,
  Type.string);






















};