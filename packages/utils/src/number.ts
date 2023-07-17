const toNumber = (n: any): number => {
  const num = parseFloat(n)

  return typeof num !== 'number' || Number.isNaN(num) ? 0 : num
}

export const toPrecision = (n: number, precision?: number): string => {
  n = toNumber(n)

  const scale = 10 ** (precision ?? 10)

  n = Math.round(n * scale) / scale

  return precision ? n.toFixed(precision) : n.toString()
}

export const countDecimal = (n: number): number => {
  if (!Number.isFinite(n)) return 0

  let e = 1
  let p = 0

  while (Math.round(n * e) / e !== n) {
    e *= 10
    p += 1
  }

  return p
}

export const roundNumberToStep = (n: number, from: number, step: number) => {
  const nextValue = Math.round((n - from) / step) * step + from

  const precision = countDecimal(step)

  return toPrecision(nextValue, precision)
}

export const valueToPercent = (n: number, min: number, max: number): number =>
  ((n - min) * 100) / (max - min)

export const percentToValue = (n: number, min: number, max: number) =>
  (max - min) * n + min

export const clampNumber = (n: number, min: number, max: number): number =>
  Math.min(Math.max(n, min), max)
