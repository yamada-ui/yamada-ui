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

export type Path<Y> = Y extends any[]
  ? `${number}`
  : {
      [M in keyof Y]-?: PathImpl<M, Y[M]>
    }[keyof Y]

export type Value<
  Y extends Dict,
  M extends string,
> = M extends `${infer D}.${infer H}` ? Value<Y[D], H> : Y[M]

export interface Dict<Y = any> {
  [key: string]: Y
}

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type FunctionOrValue<Y, M> = ((props: Y) => M) | M

export type AnyString = string & {}

export type Booleanish<Y> = Y extends "false" | "true" ? boolean : Y

export type Length<T extends any[]> = T["length"]

export type Merge<Y, M> = M & Omit<Y, keyof M>

export type DeepPartial<Y> = Y extends any[] | Date | Function | Primitive
  ? Y
  : {
      [P in keyof Y]?: DeepPartial<Y[P]>
    }
