import type { Merge } from "@yamada-ui/utils"
import type { As, Component, WithoutAs } from "./component.types"
import * as React from "react"

/**
 * @deprecated
 */
export function forwardRef<Y extends object, M extends As>(
  render: React.ForwardRefRenderFunction<
    any,
    { as?: As } & Merge<React.ComponentPropsWithoutRef<M>, WithoutAs<Y>>
  >,
) {
  return React.forwardRef(
    render as React.ForwardRefRenderFunction<any>,
  ) as unknown as Component<M, Y>
}
