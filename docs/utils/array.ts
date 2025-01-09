export const flattenArray = <T = any>(array: T[], key: keyof T) => {
  let result: T[] = []

  array.forEach((item) => {
    result = [...result, item]

    const targetItem = item[key]

    if (Array.isArray(targetItem))
      result = [...result, ...flattenArray(targetItem, key)]
  })

  return result
}

export const includes = <T extends readonly unknown[]>(
  array: T,
  searchElement: unknown,
): searchElement is T[number] => array.includes(searchElement)
