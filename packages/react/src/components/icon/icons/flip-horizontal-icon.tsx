"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlipHorizontal as OriginalFlipHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlipHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlipHorizontalIcon = component(Icon)({
  as: OriginalFlipHorizontalIcon,
}) as Component<"svg", IconProps>
