"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutGridCircles as OriginalLayoutGridCirclesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutGridCirclesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutGridCirclesIcon = component(Icon)({
  as: OriginalLayoutGridCirclesIcon,
}) as Component<"svg", IconProps>
