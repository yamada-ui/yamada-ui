"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldEllipsis as OriginalShieldEllipsisIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldEllipsisIcon = component(Icon)({
  as: OriginalShieldEllipsisIcon,
}) as Component<"svg", IconProps>
