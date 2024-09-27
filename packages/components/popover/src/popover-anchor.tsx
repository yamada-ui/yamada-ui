import type { FC } from "@yamada-ui/core"
import type { PropsWithChildren, ReactElement, RefObject } from "react"
import { Children, cloneElement } from "react"
import { usePopover } from "./popover"

export const PopoverAnchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  const child = Children.only(children) as ReactElement & {
    ref: RefObject<any>
  }
  const { getAnchorProps } = usePopover()

  return cloneElement(child, getAnchorProps(child.props, child.ref))
}

PopoverAnchor.displayName = "PopoverAnchor"
PopoverAnchor.__ui__ = "PopoverAnchor"
