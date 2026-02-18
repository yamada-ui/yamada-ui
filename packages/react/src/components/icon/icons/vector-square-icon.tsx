"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VectorSquare as OriginalVectorSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VectorSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VectorSquareIcon = component(Icon)({
  as: OriginalVectorSquareIcon,
}) as Component<"svg", IconProps>
