import { Children, cloneElement, FC, PropsWithChildren, ReactElement, RefObject } from 'react'
import { usePopover } from './'

export const PopoverTrigger: FC<PropsWithChildren<{}>> = ({ children }) => {
  const child = Children.only(children) as ReactElement & { ref: RefObject<any> }
  const { getTriggerProps } = usePopover()

  return cloneElement(child, getTriggerProps(child.props, child.ref))
}
