export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint

type PathImpl<Y extends string | number | symbol, M> = Y extends string | number
  ? M extends Primitive
    ? `${Y}`
    : `${Y}.${Path<M>}`
  : ``

export type Path<Y> = {
  [M in keyof Y]-?: PathImpl<M, Y[M]>
}[keyof Y]

export interface Dict<Y = any> {
  [key: string]: Y
}

export interface ObjectLiteral {}

export type StringLiteral = string & {}

export type Replace<
  Y extends string,
  M extends string,
  D extends string,
  H extends string = "",
> = Y extends `${infer T}${M}${infer R}`
  ? Replace<R, M, D, `${H}${T}${D}`>
  : `${H}${Y}`

export type Union<Y> = Y | StringLiteral

export type Length<T extends any[]> = T["length"]

export type Merge<Y, M> = Omit<Y, keyof M> & M

export type MergeIfDefined<Y, M> = M extends undefined ? Y : Merge<Y, M>
