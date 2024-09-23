export function toNumber(n: any): number {
  const num = parseFloat(n)

  return typeof num !== "number" || Number.isNaN(num) ? 0 : num
}

export function toPrecision(n: number, precision?: number): string {
  n = toNumber(n)

  const scale = 10 ** (precision ?? 10)

  n = Math.round(n * scale) / scale

  return precision ? n.toFixed(precision) : n.toString()
}

export function countDecimal(n: number): number {
  if (!Number.isFinite(n)) return 0

  let e = 1
  let p = 0

  while (Math.round(n * e) / e !== n) {
    e *= 10
    p += 1
  }

  return p
}

export function roundNumberToStep(n: number, from: number, step: number) {
  const nextValue = Math.round((n - from) / step) * step + from

  const precision = countDecimal(step)

  return toPrecision(nextValue, precision)
}

export function valueToPercent(n: number, min: number, max: number): number {
  return ((n - min) * 100) / (max - min)
}

export function percentToValue(n: number, min: number, max: number) {
  return (max - min) * n + min
}

export function clampNumber(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max)
}
