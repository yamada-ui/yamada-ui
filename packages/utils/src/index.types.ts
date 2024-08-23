export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint

type PathImpl<K extends string | number | symbol, V> = K extends string | number
  ? V extends Primitive
    ? `${K}`
    : `${K}.${Path<V>}`
  : ``

export type Path<T> = {
  [K in keyof T]-?: PathImpl<K, T[K]>
}[keyof T]

export type Dict<T = any> = Record<string, T>

export type ObjectLiteral = {}

export type StringLiteral = string & {}

export type Union<T> = T | StringLiteral

export type Length = string | 0 | number

export type Merge<Y, M> = Omit<Y, keyof M> & M

export type MergeIfDefined<Y, M> = M extends undefined ? Y : Merge<Y, M>
