type Primitive = null | undefined | string | number | boolean | symbol | bigint

type ArrayKey = number

type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true

type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>

type PathImpl<K extends string | number | symbol, V> = K extends string | number
  ? V extends Primitive
    ? `${K}`
    : `${K}.${Path<V>}`
  : ``

export type Path<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKeys<T>]-?: PathImpl<K & string, T[K]>
      }[TupleKeys<T>]
    : PathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: PathImpl<K, T[K]>
    }[keyof T]

export type Dict<T = any> = Record<string, T>

export type StringLiteral = string & {}

export type Union<T> = T | StringLiteral

export type Length = string | 0 | number

export type DynamicRecord<T> = {
  [K in keyof T]-?: T[K] extends Primitive ? string | number : DynamicRecord<T[K]>
}
