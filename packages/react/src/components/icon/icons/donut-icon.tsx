"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Donut as OriginalDonutIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DonutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DonutIcon = component(Icon)({
  as: OriginalDonutIcon,
}) as Component<"svg", IconProps>
