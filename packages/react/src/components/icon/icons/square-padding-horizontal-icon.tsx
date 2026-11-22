"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePaddingHorizontal as OriginalSquarePaddingHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePaddingHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePaddingHorizontalIcon = component(Icon)({
  as: OriginalSquarePaddingHorizontalIcon,
}) as Component<"svg", IconProps>
