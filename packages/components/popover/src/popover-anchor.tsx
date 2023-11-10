import {
  Children,
  cloneElement,
  FC,
  PropsWithChildren,
  ReactElement,
  RefObject,
} from "react"
import { usePopover } from "./popover"

export const PopoverAnchor: FC<PropsWithChildren<{}>> = ({ children }) => {
  const child = Children.only(children) as ReactElement & {
    ref: RefObject<any>
  }
  const { getAnchorProps } = usePopover()

  return cloneElement(child, getAnchorProps(child.props, child.ref))
}
