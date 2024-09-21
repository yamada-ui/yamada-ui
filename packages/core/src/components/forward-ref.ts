import type { Merge } from "@yamada-ui/utils"
import * as React from "react"
import type { As, Component, WithoutAs } from "./component.types"

export function forwardRef<Y extends object, M extends As>(
  render: React.ForwardRefRenderFunction<
    any,
    Merge<React.ComponentPropsWithoutRef<M>, WithoutAs<Y>> & { as?: As }
  >,
) {
  return React.forwardRef(
    render as React.ForwardRefRenderFunction<any>,
  ) as unknown as Component<M, Y>
}
