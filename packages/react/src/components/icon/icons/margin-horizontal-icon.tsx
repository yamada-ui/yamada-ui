"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MarginHorizontal as OriginalMarginHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MarginHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MarginHorizontalIcon = component(Icon)({
  as: OriginalMarginHorizontalIcon,
}) as Component<"svg", IconProps>
