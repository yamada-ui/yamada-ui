import type {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from "react"
import { Children, cloneElement, isValidElement } from "react"
import { mergeProps } from "../../core"
import { useFindChild, useValidChildren } from "../../utils"

export interface SlotProps
  extends HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement>,
    PropsWithChildren {}

/**
 * `Slot` is a component that merges its props onto its immediate child.
 *
 * @see https://yamada-ui.com/components/slot
 */
export const Slot: FC<SlotProps> = ({ children, ...rest }) => {
  const validChildren = useValidChildren(children)
  const slottable = useFindChild(validChildren, Slottable)

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
