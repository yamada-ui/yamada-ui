import * as React from 'react'
import { As, Component, IntersectionProps, PropsOf } from '../types'

export const forwordRef = <Props extends object, Element extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    IntersectionProps<PropsOf<Element>, Props> & { as?: As }
  >,
) => {
  return React.forwardRef(component) as unknown as Component<Element, Props>
}
