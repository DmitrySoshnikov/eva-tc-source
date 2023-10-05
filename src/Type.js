/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const TypeEnvironment = require('./TypeEnvironment');

/**
 * Type class.
 */
class Type {
  constructor(name) {
    this.name = name;
  }

  /**
   * Returns name.
   */
  getName() {
    return this.name;
  }

  /**
   * String representation.
   */
  toString() {
    return this.getName();
  }

  /**
   * Equals.
   */
  equals(other) {
    /* Implement here */
  }

  /**
   * From string: 'number' -> Type.number
   */
  static fromString(typeStr) {
    /* Implement here */
  }
}

/**
 * Number type.
 */
Type.number = new Type('number');

/**
 * String type.
 */
Type.string = new Type('string');

/**
 * Boolean type.
 */
Type.boolean = new Type('boolean');

/**
 * Null type.
 */
Type.null = new Type('null');

/**
 * Any type.
 */
Type.any = new Type('any');

/**
 * Function meta type.
 */
Type.Function = class extends Type {
  /* Implement here */

  /**
   * Returns name: Fn<returnType<p1, p2, ...>>
   *
   * Fn<number> - function which returns a number
   *
   * Fn<number<number,number>> - function which returns a number, and accepts two numbers
   */
  getName() {
    if (this.name == null) {
      const name = ['Fn<', this.returnType.getName()];
      // Params.
      if (this.paramTypes.length !== 0) {
        const params = [];
        for (let i = 0; i < this.paramTypes.length; i++) {
          params.push(this.paramTypes[i].getName());
        }
        name.push('<', params.join(','), '>');
      }
      name.push('>');

      // Calculated name:
      this.name = name.join('');
    }
    return this.name;
  }

  /* Implement here */

};

/**
 * Type alias: (type int number)
 */
Type.Alias = class extends Type {
  constructor({name, parent}) {
    super(name);
    this.parent = parent;
  }

  /**
   * Equals.
   */
  equals(other) {
    /* Implement here */
  }
};

module.exports = Type;

/**
 * Class type: (class ...)
 *
 * Creates a new TypeEnvironment.
 */
Type.Class = class extends Type {
  /* Implement here */
};

/**
 * Union type: (or string number)
 */
Type.Union = class extends Type {
  /* Implement here */
};

/**
 * Generic function type.
 *
 * Generic functions create normal function types
 * when a function is called.
 */
Type.GenericFunction = class extends Type {
  /* Implement here */
};




















