export type Primitive =
  | bigint
  | boolean
  | Date
  | Function
  | null
  | number
  | string
  | symbol
  | undefined

type PathImpl<Y extends number | string | symbol, M, D = Primitive> = Y extends
  | number
  | string
  ? M extends D
    ? `${Y}`
    : `${Y}.${Path<M, D>}` | `${Y}`
  : ``

export type Path<Y, M = Primitive> = Y extends any[]
  ? `${number}`
  : {
      [D in keyof Y]-?: PathImpl<D, Y[D], M>
    }[keyof Y]

export type Value<
  Y extends Dict,
  M extends string,
> = M extends `${infer D}.${infer H}` ? Value<Y[D], H> : Y[M]

export interface Dict<Y = any> {
  [key: string]: Y
}

export type Prettify<Y> = {
  [M in keyof Y]: Y[M]
} & {}

export type FunctionOrValue<Y, M> = ((props: Y) => M) | M

export type AnyString = string & {}

export type Booleanish<Y> = Y extends "false" | "true" ? boolean : Y

export type Length<Y extends any[]> = Y["length"]

export type Merge<Y, M> = M & Omit<Y, keyof M>

export type DeepMerge<Y, M> = Y extends any[] | Primitive
  ? M
  : Y extends object
    ? M extends object
      ? {
          [D in keyof M | keyof Y]: D extends keyof M
            ? D extends keyof Y
              ? DeepMerge<Y[D], M[D]>
              : M[D]
            : D extends keyof Y
              ? Y[D]
              : never
        }
      : M
    : M

export type DeepPartial<Y> = Y extends any[] | Primitive
  ? Y
  : {
      [P in keyof Y]?: DeepPartial<Y[P]>
    }
