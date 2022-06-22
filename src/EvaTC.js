/**
 * Typed Eva: static typecheker.
 *
 * (C) 2022-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const Type = require('./Type');
const TypeEnvironment = require('./TypeEnvironment');

/**
 * Typed Eva: static typecheker.
 */
class EvaTC {
  /**
   * Creates an Eva instance with the global environment.
   */
  constructor() {
    /**
     * Create the Global TypeEnvironment per Eva instance.
     */
    this.global = this._createGlobal();
  }

  /**
   * Evaluates global code wrapping into a block.
   */
  tcGlobal(exp) {
    return this._tcBody(exp, this.global);
  }

  /**
   * Checks body (global or function).
   */
  _tcBody(body, env) {
    if (body[0] === 'begin') {
      return this._tcBlock(body, env);
    }
    return this.tc(body, env);
  }

  /**
   * Infers and validates type of an expression.
   */
  tc(exp, env = this.global) {
    // --------------------------------------------
    // Self-evaluating:

    /**
     * Numbers: 10
     */
    if (this._isNumber(exp)) {
      return Type.number;
    }

    /**
     * Strings: "hellow"
     */
    if (this._isString(exp)) {
      return Type.string;
    }

    // --------------------------------------------
    // Boolean: true | false

    if (this._isBoolean(exp)) {
      /* Implement here */
    }

    // --------------------------------------------
    // Math operations:

    if (this._isBinary(exp)) {
      return this._binary(exp, env);
    }

    // --------------------------------------------
    // Boolean binary:

    if (this._isBooleanBinary(exp)) {
      /* Implement here */
    }

    // --------------------------------------------
    // Type declaration/alias: (type <name> <base>)

    if (exp[0] === 'type') {
      /* Implement here */
    }

    // --------------------------------------------
    // Class declaration: (class <Name> <Super> <Body>)

    if (exp[0] === 'class') {
      /* Implement here */
    }

    // --------------------------------------------
    // Class instantiation: (new <Class> <Arguments>...)

    if (exp[0] === 'new') {
      /* Implement here */
    }

    // --------------------------------------------
    // Super expressions: (super <ClassName>)

    if (exp[0] === 'super') {
      /* Implement here */
    }

    // --------------------------------------------
    // Property access: (prop <instance> <name>)

    if (exp[0] === 'prop') {
      /* Implement here */
    }

    // --------------------------------------------
    // Variable declaration: (var x 10)
    //
    // With typecheck: (var (x number) "foo") // error

    if (exp[0] === 'var') {
      /* Implement here */
    }

    // --------------------------------------------
    // Variable access: foo

    if (this._isVariableName(exp)) {
      /* Implement here */
    }

    // --------------------------------------------
    // Variable update: (set x 10)

    if (exp[0] === 'set') {
      /* Implement here */
    }

    // --------------------------------------------
    // Block: sequence of expressions

    if (exp[0] === 'begin') {
      /* Implement here */
    }

    // --------------------------------------------
    // if-expression:
    //
    //    Γ ⊢ e1 : boolean  Γ ⊢ e2 : t  Γ ⊢ e3 : t
    //   ___________________________________________
    //
    //           Γ ⊢ (if e1 e2 e3) : t
    //
    // Both branches should return the same time t.
    //

    if (exp[0] === 'if') {
      /* Implement here */
    }

    // --------------------------------------------
    // while-expression:

    if (exp[0] === 'while') {
      /* Implement here */
    }

    // --------------------------------------------
    // Function declaration: (def square ((x number)) -> number (* x x))
    //
    // Syntactic sugar for: (var square (lambda ((x number)) -> number (* x x)))

    if (exp[0] === 'def') {
      /* Implement here */
    }

    // --------------------------------------------
    // Lambda function: (lambda ((x number)) -> number (* x x))

    if (exp[0] === 'lambda') {
      /* Implement here */
    }

    // --------------------------------------------
    // Function calls.
    //
    // (square 2)

    if (Array.isArray(exp)) {
      /* Implement here */
    }

    throw `Unknown type for expression ${exp}.`;
  }

  /**
   * Maps generic parameter types to actual types.
   */
  _getGenericTypesMap(genericTypes, actualType) {
    const boundTypes = new Map();
    for (let i = 0; i < genericTypes.length; i++) {
      boundTypes.set(genericTypes[i], actualType[i]);
    }
    return boundTypes;
  }

  /**
   * Binds generic parameters and return type to actual types.
   */
  _bindFunctionTypes(params, returnType, genericTypesMap) {
    /* Implement here */
  }

  /**
   * Extracts types for generic parameter types.
   *
   * (combine <string> "hello")
   */
  _extractActulCallTypes(exp) {
    const data = /^<([^>]+)>$/.exec(exp[1]);

    if (data == null) {
      throw `No actual types provided in generic call: ${exp}.`;
    }

    return data[1].split(',');
  }

  /**
   * Simple function declarations (no generic parameters).
   *
   * Such functions are type-checked during declaration time.
   */
  _createSimpleFunctionType(exp, env) {
    /* Implement here */
  }

  /**
   * Generic function declarations.
   *
   * Such functions are *not* checked at declaration,
   * instead they are checked at call time, when all
   * generic parameters are bound.
   */
  _createGenericFunctionType(exp, env) {
    /* Implement here */
  }

  /**
   * Whether the function is generic.
   *
   * (lambda <K> ((x K)) -> K (+ x x))
   */
  _isGenericLambdaFunction(exp) {
    /* Implement here */
  }

  /**
   * Whether the function is generic.
   *
   * (def foo <K> ((x K)) -> K (+ x x))
   */
  _isGenericDefFunction(exp) {
    return exp.length === 7 && /^<[^>]+>$/.test(exp[2]);
  }

  /**
   * Transforms def to var-lambda.
   */
  _transformDefToVarLambda(exp) {
    /* Implement here */
  }

  /**
   * Whether the if-condition is type casting/specification.
   *
   * This is used with union types to make a type concrete:
   *
   * (if (== (typeof foo) "string") ...)
   *
   */
  _isTypeCastCondition(condition) {
    const [op, lhs] = condition;
    return op === '==' && lhs[0] === 'typeof';
  }

  /**
   * Returns specific type after casting.
   *
   * This is used with union types to make a type concrete:
   *
   * (if (== (typeof foo) "string") ...)
   *
   */
  _getSpecifiedType(condition) {
    /* Implement here */
  }

  /**
   * Checks function call.
   */
  _checkFunctionCall(fn, argTypes, env, exp) {
    /* Implement here */
  }

  /**
   * Checks function body.
   */
  _tcFunction(params, returnTypeStr, body, env) {
    /* Implement here */
  }

  /**
   * Checks a block.
   */
  _tcBlock(block, env) {
    let result;

    const [_tag, ...expressions] = block;

    expressions.forEach(exp => {
      result = this.tc(exp, env);
    });

    return result;
  }

  /**
   * Whether the expression is a variable name.
   */
  _isVariableName(exp) {
    return typeof exp === 'string' && /^[+\-*/<>=a-zA-Z0-9_:]+$/.test(exp);
  }

  /**
   * Creates a Global TypeEnvironment.
   */
  _createGlobal() {
    return new TypeEnvironment({
      VERSION: Type.string,

      sum: Type.fromString('Fn<number<number,number>>'),
      square: Type.fromString('Fn<number<number>>'),

      typeof: Type.fromString('Fn<string<any>>'),
    });
  }

  /**
   * Whether the expression is boolean binary.
   */
  _isBooleanBinary(exp) {
    /* Implement here */
  }

  /**
   * Boolean binary operators.
   */
  _booleanBinary(exp, env) {
    /* Implement here */
  }

  /**
   * Whether the expression is binary.
   */
  _isBinary(exp) {
    return /^[+\-*/]$/.test(exp[0]);
  }

  /**
   * Binary operators.
   */
  _binary(exp, env) {
    /* Implement here */
  }

  /**
   * Returns allowed operand types for an operator.
   */
  _getOperandTypesForOperator(operator) {
    switch (operator) {
      case '+':
        return [Type.string, Type.number];
      case '-':
        return [Type.number];
      case '/':
        return [Type.number];
      case '*':
        return [Type.number];
      default:
        throw `Unknown operator: ${operator}.`;
    }
  }

  /**
   * Throws if operator type doesn't expect the operand.
   */
  _expectOperatorType(type_, allowedTypes, exp) {
    /* Implement here */
  }

  /**
   * Expects a type.
   */
  _expect(actualType, expectedType, value, exp) {
    if (!actualType.equals(expectedType)) {
      this._throw(actualType, expectedType, value, exp);
    }
    return actualType;
  }

  /**
   * Throws type error.
   */
  _throw(actualType, expectedType, value, exp) {
    throw `\nExpected "${expectedType}" type for ${value} in ${JSON.stringify(exp)}, but got "${actualType}" type.\n`;
  }

  /**
   * Throws for number of arguments.
   */
  _checkArity(exp, arity) {
    if (exp.length - 1 !== arity) {
      throw `\nOperator '${exp[0]}' expects ${arity} operands, ${exp.length -
        1} given in ${exp}.\n`;
    }
  }

  /**
   * Whether the expression is a boolean.
   */
  _isBoolean(exp) {
    return typeof exp === 'boolean' || exp === 'true' || exp === 'false';
  }

  /**
   * Whether the expression is a number.
   */
  _isNumber(exp) {
    return typeof exp === 'number';
  }

  /**
   * Whether the expression is a string.
   */
  _isString(exp) {
    return typeof exp === 'string' && exp[0] === '"' && exp.slice(-1) === '"';
  }
}

module.exports = EvaTC;