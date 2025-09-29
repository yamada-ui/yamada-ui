type Operator = "*" | "+" | "-" | "/"

export type Operand = number | string

function toExpression(operator: Operator, ...args: Operand[]) {
  return args.join(` ${operator} `).replace(/calc/g, "")
}

function add(...args: Operand[]) {
  return `calc(${toExpression("+", ...args)})`
}

function subtract(...args: Operand[]) {
  return `calc(${toExpression("-", ...args)})`
}

function multiply(...args: Operand[]) {
  return `calc(${toExpression("*", ...args)})`
}

function divide(...args: Operand[]) {
  return `calc(${toExpression("/", ...args)})`
}

function negate(value: Operand) {
  if (!isNaN(parseFloat(value.toString())))
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`

  return multiply(value, -1)
}

interface Calc {
  add: (...args: Operand[]) => Calc
  divide: (...args: Operand[]) => Calc
  multiply: (...args: Operand[]) => Calc
  negate: () => Calc
  subtract: (...args: Operand[]) => Calc
  toString: () => string
}

export const calc = Object.assign(
  (x: Operand): Calc => ({
    add: (...args) => calc(add(x, ...args)),
    divide: (...args) => calc(divide(x, ...args)),
    multiply: (...args) => calc(multiply(x, ...args)),
    negate: () => calc(negate(x)),
    subtract: (...args) => calc(subtract(x, ...args)),
    toString: () => x.toString(),
  }),
  {
    add,
    divide,
    multiply,
    negate,
    subtract,
  },
)
