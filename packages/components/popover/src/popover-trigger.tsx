import type { FC } from "@yamada-ui/core"
import type { PropsWithChildren, ReactElement, RefObject } from "react"
import { Children, cloneElement } from "react"
import { usePopover } from "./popover"

export const PopoverTrigger: FC<PropsWithChildren<{}>> = ({ children }) => {
  const child = Children.only(children) as {
    ref: RefObject<any>
  } & ReactElement
  const { getTriggerProps } = usePopover()

  return cloneElement(child, getTriggerProps(child.props, child.ref))
}

PopoverTrigger.displayName = "PopoverTrigger"
PopoverTrigger.__ui__ = "PopoverTrigger"
