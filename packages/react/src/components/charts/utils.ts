import React from "react"
import {
  getValidChildren,
  isArray,
  isEmpty,
  omitChildren,
  pickChildren,
} from "../../utils"

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
