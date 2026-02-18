"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BetweenVerticalEnd as OriginalBetweenVerticalEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BetweenVerticalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BetweenVerticalEndIcon = component(Icon)({
  as: OriginalBetweenVerticalEndIcon,
}) as Component<"svg", IconProps>
