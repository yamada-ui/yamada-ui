import { isArray, isNumber, isString, isUndefined } from "@yamada-ui/utils"
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

export function findChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): [React.ReactElement | undefined, ...React.ReactElement[]] {
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
    if (types.some((type) => isSomeElement(child.type, type))) return true

    const children = getValidChildren(child.props.children)

    return children.length ? includesChildren(children, ...types) : false
  })
}

export function omitChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement[] {
  return children.filter((child) =>
    types.every((type) => !isSomeElement(child.type, type)),
  )
}

export function pickChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement[] {
  return children.filter((child) =>
    types.some((type) => isSomeElement(child.type, type)),
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
