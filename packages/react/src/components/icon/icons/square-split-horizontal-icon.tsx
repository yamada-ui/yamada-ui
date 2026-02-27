"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSplitHorizontal as OriginalSquareSplitHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareSplitHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareSplitHorizontalIcon = component(Icon)({
  as: OriginalSquareSplitHorizontalIcon,
}) as Component<"svg", IconProps>
