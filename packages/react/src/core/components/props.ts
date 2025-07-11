import type { Dict, Merge } from "../../utils"
import { useMemo } from "react"
import isEqual from "react-fast-compare"
import {
  cx,
  handlerAll,
  isArray,
  isEmptyObject,
  isFunction,
  isObject,
  isUndefined,
  merge,
  mergeRefs,
  omitObject,
  splitObject,
} from "../../utils"
import { conditionProperties, styleProperties } from "../css"

type MergeAll<Y extends Dict[]> = Y extends [infer M]
  ? M
  : Y extends [infer D, ...infer H]
    ? H extends any[]
      ? Merge<D, MergeAll<H>>
      : D
    : never

function isEvent(key: string) {
  return /^on[A-Z]/.test(key)
}

export const cssProps = new Set<string>([
  ...conditionProperties,
  ...styleProperties,
])

export type ShouldForwardProp = (prop: string) => boolean

export function createShouldForwardProp(
  forwardProps: string[] = [],
): ShouldForwardProp {
  return function (prop: string): boolean {
    if (forwardProps.includes(prop)) return true

    if (prop.startsWith("--")) return false

    return !cssProps.has(prop)
  }
}

interface MergePropsOptions {
  mergeClassName?: boolean
  mergeCSS?: boolean
  mergeEvent?: boolean
  mergeRef?: boolean
  mergeStyle?: boolean
}

export function mergeProps<Y extends Dict[]>(...args: Y) {
  return function ({
    mergeClassName = true,
    mergeCSS = true,
    mergeEvent = true,
    mergeRef = true,
    mergeStyle = true,
  }: MergePropsOptions = {}): MergeAll<Y> {
    let result: Dict = {}

    for (const props of args) {
      for (const key in result) {
        if (mergeRef && key === "ref") {
          result[key] = mergeRefs(result[key], props[key])

          continue
        }

        if (
          mergeEvent &&
          isEvent(key) &&
          isFunction(result[key]) &&
          isFunction(props[key])
        ) {
          result[key] = handlerAll(result[key], props[key])

          continue
        }

        if (mergeClassName && (key === "className" || key === "class")) {
          result[key] = cx(result[key], props[key])

          continue
        }

        if (mergeStyle && key === "style") {
          result[key] = merge(result[key] ?? {}, props[key] ?? {})

          continue
        }

        if (mergeCSS && key === "css") {
          if (isArray(result[key])) {
            result[key].push(props[key])
          } else {
            result[key] ??= []

            result[key] = [result[key], props[key]]
          }

          continue
        }

        result[key] = !isUndefined(props[key]) ? props[key] : result[key]
      }

      for (const key in props) {
        if (isUndefined(result[key])) result[key] = props[key]
      }
    }

    return result as any
  }
}

type CallbackProps<Y extends Dict = Dict> = (props: Y) => Y

type PropsOrCallback<Y extends Dict = Dict> = CallbackProps<Y> | Y

export function chainProps<Y extends Dict = Dict>(
  ...props: PropsOrCallback<Y>[]
) {
  return function (options: MergePropsOptions = {}) {
    if (!props.length) return (a: Y) => a

    if (props.length === 1)
      return function (b: Y) {
        const a = props[0] ?? {}
        const c = isFunction(a) ? a(b) : mergeProps(a, b)(options)

        return c
      } as CallbackProps<Y>

    return props.reduce(function (a, b) {
      return function (c: Y = {} as Y) {
        const d = isFunction(a) ? a(c) : mergeProps(a, c)(options)
        const f = isFunction(b) ? b(d) : mergeProps(b, d)(options)

        return f
      }
    }) as CallbackProps<Y>
  }
}

export function isEqualProps<
  Y extends Dict,
  M extends Dict,
  D extends keyof M | keyof Y,
>(a: Y, b: M, omitKeys: D[] = []) {
  return isEqual(
    omitObject(a, omitKeys as (keyof Y)[]),
    omitObject(b, omitKeys as (keyof M)[]),
  )
}

export function useSplitProps(props: Dict, keys: readonly string[] | string[]) {
  return useMemo(() => splitObject(props, keys), [props, keys])
}

export function extractProps(props: Dict, keys: readonly string[] | string[]) {
  let result: Dict = {}

  Object.entries(props).forEach(([key, value]) => {
    if (!cssProps.has(key)) return

    if (keys.includes(key)) {
      result = merge(result, { [key]: value })
    } else if (isObject(value)) {
      value = extractProps(value, keys)

      if (isEmptyObject(value)) return

      result = merge(result, { [key]: value })
    }
  })

  return result
}

export function useExtractProps(
  props: Dict,
  keys: readonly string[] | string[],
) {
  return useMemo(() => extractProps(props, keys), [props, keys])
}
