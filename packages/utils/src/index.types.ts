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

export type StringLiteral = string & {}

export type Union<Y> = StringLiteral | Y

export type Booleanish<Y> = Y extends "false" | "true" ? boolean : Y

export type Length<T extends any[]> = T["length"]

export type Merge<Y, M> = M & Omit<Y, keyof M>
