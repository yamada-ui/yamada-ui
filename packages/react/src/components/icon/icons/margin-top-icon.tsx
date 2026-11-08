"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MarginTop as OriginalMarginTopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MarginTopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MarginTopIcon = component(Icon)({
  as: OriginalMarginTopIcon,
}) as Component<"svg", IconProps>
