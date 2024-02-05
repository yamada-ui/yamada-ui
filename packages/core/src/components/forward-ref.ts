import * as React from "react"
import type {
  As,
  Component,
  IntersectionProps,
  PropsOf,
} from "./component.types"

export const forwardRef = <
  Props extends object,
  Element extends As,
  withAs extends boolean = true,
>(
  component: React.ForwardRefRenderFunction<
    any,
    IntersectionProps<PropsOf<Element>, Props> &
      (withAs extends true ? { as?: As } : {})
  >,
) => {
  return React.forwardRef(component) as unknown as Component<Element, Props>
}
