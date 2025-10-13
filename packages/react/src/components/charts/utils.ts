import type { StyledTheme, System } from "../../core"
import type { Dict } from "../../utils"
import React from "react"
import { getCSS } from "../../core"
import {
  cx,
  getValidChildren,
  isArray,
  isEmpty,
  isString,
  omitChildren,
  pickChildren,
  splitObject,
  toArray,
} from "../../utils"

export const getClassName =
  (...styles: (Dict | string | undefined)[]) =>
  (system: System, theme: StyledTheme) =>
    cx(
      ...styles.map((style) =>
        isString(style) ? style : getCSS(system, theme)(style),
      ),
    )

export const getComponentProps =
  <T extends Dict, K extends keyof T>(
    system: System,
    [obj, keys]: [T, K[]],
    ...props: (Dict | string | undefined)[]
  ) =>
  <P extends boolean = false>(theme: StyledTheme, isContain?: P) => {
    const [pickedProps, omittedProps] = splitObject<T, K>(obj, keys)
    const className = getClassName(...toArray(props), omittedProps)(
      system,
      theme,
    )

    return (
      !isContain ? [pickedProps, className] : { ...pickedProps, className }
    ) as P extends false
      ? [{ [P in K]?: T[P] }, string]
      : { [P in K]?: T[P] } & { className: string }
  }

export function splitChildren<Y = any, M = any>(
  children: React.ReactNode,
  ...types: (
    | (React.JSXElementConstructor<any> | string)[]
    | React.JSXElementConstructor<any>
    | string
  )[]
): [
  React.ReactElement<M>[] | React.ReactNode,
  ...(React.ReactElement<Y> | React.ReactElement<Y>[])[],
] {
  const validChildren = getValidChildren(children)

  if (isEmpty(validChildren)) return [children]

  const pickedChildren = types.map((types) =>
    isArray(types)
      ? pickChildren(validChildren, ...types)
      : pickChildren(validChildren, types),
  )

  const omittedChildren = omitChildren(validChildren, ...types.flat())

  return [omittedChildren, ...pickedChildren] as const
}

export function useSplitChildren<Y = any, M = any>(
  children: React.ReactNode,
  ...types: (
    | (React.JSXElementConstructor<any> | string)[]
    | React.JSXElementConstructor<any>
    | string
  )[]
): [
  React.ReactElement<M>[] | React.ReactNode,
  ...(React.ReactElement<Y> | React.ReactElement<Y>[])[],
] {
  const typesRef = React.useRef(types)

  return React.useMemo(
    () => splitChildren<Y, M>(children, ...typesRef.current),
    [children],
  )
}
