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
    (def square ((x number)) -> number
      (* x x))

    (square 2)

  `,
  Type.number);

  // Complex body:

  test(eva,
  `
    (def calc ((x number) (y number)) -> number
      (begin
        (var z 30)
        (+ (* x y) z)
      ))

    (calc 10 20)

  `,
  Type.number);

  // Closure:

  test(eva,
  `
    (var value 100)

    (def calc ((x number) (y number)) -> Fn<number<number>>
      (begin
        (var z (+ x y))

        (def inner ((foo number)) -> number
          (+ (+ foo z) value))

        inner

      ))

    (var fn (calc 10 20))

    (fn 30)

  `,
  Type.number);


  // Recursive function:

  test(eva,
  `
    (def factorial ((x number)) -> number
      (if (== x 1)
        1
        (* x (factorial (- x 1)))))

    (factorial 5)

  `,
  Type.number);










};