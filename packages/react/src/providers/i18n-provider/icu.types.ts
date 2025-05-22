import type { ReactNode } from "react"
import type { AnyString } from "../../utils"

type FindElements<Y> = Y extends `${string}<${infer M}>${infer D}`
  ? M extends `/${string}`
    ? []
    : [M, ...FindElements<D>]
  : []

type FindBlocks<Y> = Y extends `${string}{${infer M}`
  ? ReadBlock<"", M, ""> extends [infer D, infer H]
    ? [D, ...FindBlocks<H>]
    : []
  : []

type ReadBlock<
  Y extends string,
  M extends string,
  D extends string,
> = M extends `${infer H}}${infer R}`
  ? H extends `${infer T}{${infer M}`
    ? ReadBlock<`${Y}${T}{`, `${M}}${R}`, `${D}+`>
    : D extends `+${infer M}`
      ? ReadBlock<`${Y}${H}}`, R, M>
      : [`${Y}${H}`, R]
  : []

type Whitespace = " " | "\n" | "\r" | "\t"

type Trim<Y> = Y extends `${Whitespace}${infer M}`
  ? Trim<M>
  : Y extends `${infer D}${Whitespace}`
    ? Trim<D>
    : Y extends string
      ? Y
      : never

type ExcludeEscape<Y> = Y extends `${infer M}'${string}'${infer D}`
  ? `${ExcludeEscape<M>}${ExcludeEscape<D>}`
  : Y

type ExcludeEmptyObject<Y> = Y extends { [key: string]: never } ? never : Y

type TransformOther<Y> = Y extends "other" ? AnyString : Y

type ArgumentValue<Y, M extends string = string> = Y extends "select"
  ? never
  : Y extends "plural"
    ? number
    : Y extends "number"
      ? number
      : Y extends "date"
        ? Date
        : Y extends "time"
          ? Date
          : AnyString | M | number

type ParseSelectBlock<
  Y,
  M,
  D extends string = string,
> = M extends `${infer H}{${infer R}`
  ? ReadBlock<"", R, ""> extends [infer T, infer M]
    ?
        | (ParseBlocks<FindBlocks<T>, D> & {
            [M in Trim<Y>]: TransformOther<Trim<H>>
          })
        | ParseSelectBlock<Y, M, D>
    : never
  : never

type ConcatBlocks<Y> = Y extends readonly [infer M, ...infer D]
  ? [...FindBlocks<M>, ...ConcatBlocks<D>]
  : []

type ParseBlock<
  Y,
  M extends string = string,
> = Y extends `${infer D},${infer H},${infer R}`
  ? Trim<H> extends "select"
    ? ParseSelectBlock<D, Trim<R>, M>
    : ParseBlocks<ConcatBlocks<FindBlocks<R>>, M> & {
        [T in Trim<D>]: ArgumentValue<Trim<H>, M>
      }
  : Y extends `${infer D},${infer H}`
    ? { [T in Trim<D>]: ArgumentValue<Trim<H>, M> }
    : { [T in Trim<Y>]: AnyString | M | number }

type ParseBlocks<Y, M extends string = string> = Y extends [infer D, ...infer H]
  ? {
      [R in
        | keyof ParseBlock<D, M>
        | keyof ParseBlocks<H, M>]: R extends keyof ParseBlock<D, M>
        ? ParseBlock<D, M>[R]
        : R extends keyof ParseBlocks<H, M>
          ? ParseBlocks<H, M>[R]
          : never
    }
  : {}

type ParseElement<Y> = {
  [M in Trim<Y>]: (chunks: string[]) => ReactNode
}

type ParseElements<Y> = Y extends [infer M, ...infer D]
  ? {
      [H in
        | keyof ParseElement<M>
        | keyof ParseElements<D>]: H extends keyof ParseElement<M>
        ? ParseElement<M>[H]
        : H extends keyof ParseElements<D>
          ? ParseElements<D>[H]
          : never
    }
  : {}

export type IcuArgs<Y, M extends string = string> = ExcludeEmptyObject<{
  [D in
    | keyof ParseBlocks<FindBlocks<ExcludeEscape<Y>>, M>
    | keyof ParseElements<
        FindElements<ExcludeEscape<Y>>
      >]: D extends keyof ParseBlocks<FindBlocks<ExcludeEscape<Y>>, M>
    ? ParseBlocks<FindBlocks<ExcludeEscape<Y>>, M>[D]
    : D extends keyof ParseElements<FindElements<ExcludeEscape<Y>>>
      ? ParseElements<FindElements<ExcludeEscape<Y>>>[D]
      : never
}>
