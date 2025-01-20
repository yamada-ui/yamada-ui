import { isNumber, isString } from "@yamada-ui/utils"
import * as React from "react"

export function getValidChildren(
  children: React.ReactNode,
): React.ReactElement<any>[] {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  )
}

export function isValidElement(child: any): child is React.ReactNode {
  return React.isValidElement(child) || isString(child) || isNumber(child)
}

export function isSomeElement(child: any, type: any): boolean {
  if (child.type === type) return true

  if (!!child.__ui__ && !!type.__ui__) {
    if (child.__ui__ === type.__ui__) return true
  }

  const payload = child.type._payload

  if (!!payload?.value?.__ui__ && !!type.__ui__) {
    if (payload?.value?.__ui__ === type.__ui__) return true
  }

  return false
}

export function findChild<Y = any>(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement<Y> | undefined {
  const child = children.find((child) =>
    types.some((type) => isSomeElement(child, type)),
  )

  return child as React.ReactElement<Y> | undefined
}

export function findChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): [React.ReactElement | undefined, ...React.ReactElement[]] {
  const child = children.find((child) =>
    types.some((type) => isSomeElement(child, type)),
  )

  if (child) {
    return children.sort((a, b) => {
      if (types.some((type) => isSomeElement(a, type))) {
        return -1
      } else if (types.some((type) => isSomeElement(b, type))) {
        return 1
      } else {
        return 0
      }
    }) as [React.ReactElement | undefined, ...React.ReactElement[]]
  } else {
    return [undefined, ...children]
  }
}

export function includesChildren(
  children: React.ReactElement<any>[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): boolean {
  return children.some((child) => {
    if (types.some((type) => isSomeElement(child, type))) return true

    const children = getValidChildren(child.props.children)

    return children.length ? includesChildren(children, ...types) : false
  })
}

export function omitChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement[] {
  return children.filter((child) =>
    types.every((type) => !isSomeElement(child, type)),
  )
}

export function pickChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement[] {
  return children.filter((child) =>
    types.every((type) => isSomeElement(child, type)),
  )
}
