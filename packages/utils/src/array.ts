export const filterEmpty = <T extends any[]>(array: T) =>
  array.filter((value) => value != null)
