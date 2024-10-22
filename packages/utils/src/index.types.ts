export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined

type PathImpl<Y extends number | string | symbol, M> = Y extends number | string
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

export type StringLiteral = {} & string

export type Replace<
  Y extends string,
  M extends string,
  D extends string,
  H extends string = "",
> = Y extends `${infer T}${M}${infer R}`
  ? Replace<R, M, D, `${H}${T}${D}`>
  : `${H}${Y}`

export type Union<Y> = StringLiteral | Y

export type Length<T extends any[]> = T["length"]

export type Merge<Y, M> = M & Omit<Y, keyof M>
