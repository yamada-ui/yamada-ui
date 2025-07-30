import {
  isArray,
  isEmpty,
  isNumber,
  isString,
  isUndefined,
} from "@yamada-ui/utils"
import * as React from "react"

export function getValidChildren(
  children: React.ReactNode,
): React.ReactElement<any>[] {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  )
}

export function useValidChildren(children: React.ReactNode) {
  return React.useMemo(() => getValidChildren(children), [children])
}

export function isValidElement(child: any): child is React.ReactNode {
  return React.isValidElement(child) || isString(child) || isNumber(child)
}

export function isSomeDisplayName(a: any, b: any): boolean {
  if (isUndefined(a) || isUndefined(b)) return false

  if (isArray(a)) {
    if (a.includes(b)) return true
    if (!!b.displayName && a.includes(b.displayName)) return true
    if (!!b.name && a.includes(b.name)) return true
  } else {
    if (a === b) return true
    if (!!a.displayName && !!b.displayName && a.displayName === b.displayName)
      return true
    if (!!a.name && !!b.name && a.name === b.name) return true
    if (!!a.displayName && !!b.name && a.displayName === b.name) return true
    if (!!a.name && !!b.displayName && a.name === b.displayName) return true
  }

  return false
}

export function isSomeElement(a: any, b: any): boolean {
  if (isUndefined(a) || isUndefined(b)) return false
  if (a === b) return true
  if (isSomeDisplayName(a, b)) return true

  a = a._payload?.value

  if (isUndefined(a)) return false
  if (isSomeDisplayName(a, b)) return true

  return false
}

export function findChild<Y = any>(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement<Y> | undefined {
  const child = children.find((child) =>
    types.some((type) => isSomeElement(child.type, type)),
  )

  return child as React.ReactElement<Y> | undefined
}

export function useFindChild<Y = any>(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement<Y> | undefined {
  const typesRef = React.useRef(types)

  return React.useMemo(
    () => findChild<Y>(children, ...typesRef.current),
    [children],
  )
}

export function findChildren<Y = any, M = any>(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): [React.ReactElement<Y> | undefined, ...React.ReactElement<M>[]] {
  const child = findChild(children, ...types)

  if (child) {
    return children.sort((a, b) => {
      if (types.some((type) => isSomeElement(a.type, type))) {
        return -1
      } else if (types.some((type) => isSomeElement(b.type, type))) {
        return 1
      } else {
        return 0
      }
    }) as [React.ReactElement<Y> | undefined, ...React.ReactElement<M>[]]
  } else {
    return [undefined, ...(children as React.ReactElement<M>[])]
  }
}

export function useFindChildren<Y = any, M = any>(
  children: React.ReactElement<M>[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): [React.ReactElement<Y> | undefined, ...React.ReactElement<M>[]] {
  const typesRef = React.useRef(types)

  return React.useMemo(
    () => findChildren<Y, M>(children, ...typesRef.current),
    [children],
  )
}

export function includesChildren(
  children: React.ReactElement<any>[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): boolean {
  return children.some((child) => {
    if (types.some((type) => isSomeElement(child.type, type))) return true

    const children = getValidChildren(child.props.children)

    return children.length ? includesChildren(children, ...types) : false
  })
}

export function useIncludesChildren(
  children: React.ReactElement<any>[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): boolean {
  return React.useMemo(
    () => includesChildren(children, ...types),
    [children, types],
  )
}

export function omitChildren<Y = any>(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement<Y>[] {
  return children.filter((child) =>
    types.every((type) => !isSomeElement(child.type, type)),
  ) as React.ReactElement<Y>[]
}

export function useOmitChildren<Y = any>(
  children: React.ReactElement<any>[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement<Y>[] {
  const typesRef = React.useRef(types)

  return React.useMemo(
    () => omitChildren<Y>(children, ...typesRef.current),
    [children],
  )
}

export function pickChildren<Y = any>(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement<Y>[] {
  return children.filter((child) =>
    types.some((type) => isSomeElement(child.type, type)),
  ) as React.ReactElement<Y>[]
}

export function usePickChildren<Y = any>(
  children: React.ReactElement<any>[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement<Y>[] {
  const typesRef = React.useRef(types)

  return React.useMemo(
    () => pickChildren<Y>(children, ...typesRef.current),
    [children],
  )
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
  ...(React.ReactElement<Y> | undefined)[],
] {
  const validChildren = getValidChildren(children)

  if (isEmpty(validChildren)) return [children]

  const pickedChildren = types.map((types) =>
    isArray(types)
      ? findChild(validChildren, ...types)
      : findChild(validChildren, types),
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
  ...(React.ReactElement<Y> | undefined)[],
] {
  const typesRef = React.useRef(types)

  return React.useMemo(
    () => splitChildren<Y, M>(children, ...typesRef.current),
    [children],
  )
}

export const wrapOrPassProps = <Y extends React.PropsWithChildren>(
  Component: React.FC<Y>,
  nodeOrProps: React.ReactNode | Y,
  additionalProps?: Y,
) => {
  if (isUndefined(nodeOrProps)) {
    return null
  } else if (isValidElement(nodeOrProps)) {
    additionalProps ??= {} as Y
    additionalProps.children = nodeOrProps

    return <Component {...additionalProps} />
  } else {
    return <Component {...additionalProps} {...nodeOrProps} />
  }
}
