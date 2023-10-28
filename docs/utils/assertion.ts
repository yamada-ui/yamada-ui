export const toBoolean = (value: string | number | boolean) => {
  if (typeof value === 'boolean') return value

  if (typeof value === 'string') return value.toLowerCase() === 'true'

  return Boolean(value)
}

export const toCamelCase = (value: string & {}) =>
  value
    .toLowerCase()
    .replace(/-(.)/g, (_, group1) => group1.toUpperCase())
    .replace(/^(.)/, (_, group1) => group1.toUpperCase())

export const toKebabCase = (value: string & {}) =>
  value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/^-/, '')

export const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
