export const escape = (value: string, replaceValue: string = ''): string =>
  value.replace(/\s+/g, replaceValue)
