/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const {test} = require('./test-util');
const Type = require('../src/Type');

module.exports = eva => {

  test(eva,
  `
    (class Point null
      (begin

        (var (x number) 0)
        (var (y number) 0)

        (def constructor ((self Point) (x number) (y number)) -> Point
          (begin
            (set (prop self x) x)
            (set (prop self y) y)
            self))

        (def calc ((self Point)) -> number
          (+ (prop self x) (prop self y)))))

    (var (p Point) (new Point 10 20))

    ((prop p calc) p)

  `,
  Type.number);

  test(eva,
  `
    (class Point3D Point
      (begin

        (var (z number) 0)

        (def constructor ((self Point3D) (x number) (y number) (z number)) -> Point3D
          (begin
            ((prop (super Point3D) constructor) self x y)
            (set (prop self z) z)
            self))

        (def calc ((self Point3D)) -> number
          (+ ((prop (super Point3D) calc) self)
             (prop self z)))))

    (var (p Point3D) (new Point3D 10 20 30))

    ((prop p calc) p)

  `,
  Type.number);























};