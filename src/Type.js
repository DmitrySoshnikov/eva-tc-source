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




















