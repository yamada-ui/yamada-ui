import type { HTMLAttributes, PropsWithChildren, RefAttributes } from "react"
import type { FC } from "../../core"
import { Children, cloneElement, isValidElement } from "react"
import { mergeProps } from "../../core"
import { findChild, getValidChildren } from "../../utils"

export interface SlotProps
  extends HTMLAttributes<HTMLElement>,
    PropsWithChildren {}

export const Slot: FC<SlotProps> = ({ children, ...rest }) => {
  const validChildren = getValidChildren(children)
  const slottable = findChild(validChildren, Slottable)

  if (slottable) {
    const newElement = slottable.props.children

    const newChildren = validChildren.map((child) => {
      if (child === slottable) {
        if (Children.count(newElement) > 1) return Children.only(null)
        return isValidElement<PropsWithChildren>(newElement)
          ? newElement.props.children
          : null
      } else {
        return child
      }
    })

    return (
      <SlotClone {...rest}>
        {isValidElement(newElement)
          ? cloneElement(newElement, undefined, newChildren)
          : null}
      </SlotClone>
    )
  }

  return <SlotClone {...rest}>{children}</SlotClone>
}

Slot.__ui__ = "Slot"

interface SlotCloneProps
  extends RefAttributes<HTMLElement>,
    PropsWithChildren {}

const SlotClone: FC<SlotCloneProps> = ({ children, ...rest }) => {
  if (isValidElement<RefAttributes<HTMLElement>>(children))
    return cloneElement(children, mergeProps(rest, children.props)())

  return Children.count(children) > 1 ? Children.only(null) : null
}

export const Slottable: FC<PropsWithChildren> = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

Slottable.__ui__ = "Slottable"
