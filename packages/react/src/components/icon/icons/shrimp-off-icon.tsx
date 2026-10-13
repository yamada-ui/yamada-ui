"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShrimpOff as OriginalShrimpOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShrimpOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShrimpOffIcon = component(Icon)({
  as: OriginalShrimpOffIcon,
}) as Component<"svg", IconProps>
