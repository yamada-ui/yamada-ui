export const toCamelCase = (value: string & {}) =>
  value
    .toLowerCase()
    .replace(/-(.)/g, (_, group1) => group1.toUpperCase())
    .replace(/^(.)/, (_, group1) => group1.toUpperCase())

export const toKebabCase = (value: string & {}) =>
  value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/^-/, "")
