type Operator = "+" | "-" | "*" | "/"

export type Operand = string | number

const toExpression = (operator: Operator, ...args: Operand[]) =>
  args.join(` ${operator} `).replace(/calc/g, "")

const add = (...args: Operand[]) => `calc(${toExpression("+", ...args)})`

const subtract = (...args: Operand[]) => `calc(${toExpression("-", ...args)})`

const multiply = (...args: Operand[]) => `calc(${toExpression("*", ...args)})`

const divide = (...args: Operand[]) => `calc(${toExpression("/", ...args)})`

const negate = (value: Operand) => {
  if (value != null && !isNaN(parseFloat(value.toString())))
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`

  return multiply(value, -1)
}

type Calc = {
  add: (...args: Operand[]) => Calc
  subtract: (...args: Operand[]) => Calc
  multiply: (...args: Operand[]) => Calc
  divide: (...args: Operand[]) => Calc
  negate: () => Calc
}

export const calc = Object.assign(
  (x: Operand): Calc => ({
    add: (...args) => calc(add(x, ...args)),
    subtract: (...args) => calc(subtract(x, ...args)),
    multiply: (...args) => calc(multiply(x, ...args)),
    divide: (...args) => calc(divide(x, ...args)),
    negate: () => calc(negate(x)),
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate,
  },
)
