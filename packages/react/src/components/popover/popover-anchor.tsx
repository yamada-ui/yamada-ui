import type { PropsWithChildren, ReactElement } from "react"
import type { FC } from "../../core"
import { Children, cloneElement } from "react"
import { usePopover } from "./popover"

export const PopoverAnchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  const child = Children.only(children) as ReactElement<any>
  const { getAnchorProps } = usePopover()

  return cloneElement(child, getAnchorProps(child.props, child.props.ref))
}

PopoverAnchor.displayName = "PopoverAnchor"
PopoverAnchor.__ui__ = "PopoverAnchor"
