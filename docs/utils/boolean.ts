export const toBoolean = (value: boolean | number | string | undefined) => {
  if (typeof value === "boolean") return value

  if (typeof value === "string") return value.toLowerCase() === "true"

  return Boolean(value)
}
