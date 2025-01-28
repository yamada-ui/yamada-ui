import type { PropsWithChildren, ReactElement } from "react"
import type { FC } from "../../core"
import { Children, cloneElement } from "react"
import { usePopover } from "./popover"

export const PopoverTrigger: FC<PropsWithChildren<{}>> = ({ children }) => {
  const child = Children.only(children) as ReactElement<any>
  const { getTriggerProps } = usePopover()

  return cloneElement(child, getTriggerProps(child.props, child.props.ref))
}

PopoverTrigger.displayName = "PopoverTrigger"
PopoverTrigger.__ui__ = "PopoverTrigger"
