/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const {test} = require('./test-util');
const Type = require('../src/Type');

module.exports = eva => {

  // Lambda function:

  test(eva,
  `
    (lambda ((x number)) -> number (* x x))

  `,
  Type.fromString('Fn<number<number>>'));

  // Pass lambda as a callback

  test(eva,
  `

    (def onClick ((callback Fn<number<number>>)) -> number
      (begin
        (var x 10)
        (var y 20)
        (callback (+ x y))))

    (onClick (lambda ((data number)) -> number (* data 10)))


  `,
  Type.number);

  // Immediately-invoked lambda expression - IILE:

  test(eva,
  `
    ((lambda ((x number)) -> number (* x x)) 2)

  `,
  Type.number);

  // Save lambda to a variable:

  test(eva,
  `
    (var square (lambda ((x number)) -> number (* x x)))

    (square 2)

  `,
  Type.number);













};