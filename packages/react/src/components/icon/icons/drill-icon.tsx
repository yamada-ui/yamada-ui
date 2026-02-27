"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Drill as OriginalDrillIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DrillIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DrillIcon = component(Icon)({
  as: OriginalDrillIcon,
}) as Component<"svg", IconProps>
