export const toBoolean = (value: string | number | boolean | undefined) => {
  if (typeof value === "boolean") return value

  if (typeof value === "string") return value.toLowerCase() === "true"

  return Boolean(value)
}
