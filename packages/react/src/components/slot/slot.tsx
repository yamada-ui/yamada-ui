import type {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from "react"
import { Children, cloneElement, isValidElement } from "react"
import { mergeProps } from "../../core"
import { getResolvedChild, useFindChild, useValidChildren } from "../../utils"

export interface SlotProps
  extends
    HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement>,
    PropsWithChildren {}

/**
 * `Slot` is a component that merges its props onto its immediate child.
 *
 * @see https://yamada-ui.com/docs/components/slot
 */
export const Slot: FC<SlotProps> = ({ children, ...rest }) => {
  const validChildren = useValidChildren(children)
  const slottable = useFindChild(validChildren, Slottable)

  if (slottable) {
    const child = getResolvedChild(slottable.props.children)
    const children = validChildren.map((validChild) => {
      if (validChild === slottable) {
        if (Children.count(child) > 1) return Children.only(null)
        return isValidElement<PropsWithChildren>(child)
          ? child.props.children
          : null
      } else {
        return validChild
      }
    })

    return (
      <SlotClone {...rest}>
        {isValidElement(child)
          ? cloneElement(child, undefined, children)
          : null}
      </SlotClone>
    )
  }

  return <SlotClone {...rest}>{children}</SlotClone>
}

interface SlotCloneProps
  extends RefAttributes<HTMLElement>, PropsWithChildren {}

const SlotClone: FC<SlotCloneProps> = ({ children, ...rest }) => {
  const child = getResolvedChild(children)

  if (isValidElement<RefAttributes<HTMLElement>>(child))
    return cloneElement(child, mergeProps(rest, child.props)())

  return Children.count(child) > 1 ? Children.only(null) : null
}

export const Slottable: FC<PropsWithChildren> = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
