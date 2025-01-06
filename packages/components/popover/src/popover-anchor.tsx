import type { FC } from "@yamada-ui/core"
import type { PropsWithChildren, ReactElement, RefObject } from "react"
import { getRef } from "@yamada-ui/utils"
import { Children, cloneElement } from "react"
import { usePopover } from "./popover"

export const PopoverAnchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  const child = Children.only(children) as {
    ref: RefObject<any>
  } & ReactElement
  const { getAnchorProps } = usePopover()

  return cloneElement(child, getAnchorProps(child.props, getRef(child)))
}

PopoverAnchor.displayName = "PopoverAnchor"
PopoverAnchor.__ui__ = "PopoverAnchor"
