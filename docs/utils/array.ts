export type MixedArray = string | Array<string | string[]>

export const toArray = (mixedArray: MixedArray) =>
  (Array.isArray(mixedArray) ? mixedArray.flat() : [mixedArray]).filter(Boolean)
