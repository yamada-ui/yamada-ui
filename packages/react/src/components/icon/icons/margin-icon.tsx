"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Margin as OriginalMarginIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MarginIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MarginIcon = component(Icon)({
  as: OriginalMarginIcon,
}) as Component<"svg", IconProps>
