"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BetweenVerticalStart as OriginalBetweenVerticalStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BetweenVerticalStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BetweenVerticalStartIcon = component(Icon)({
  as: OriginalBetweenVerticalStartIcon,
}) as Component<"svg", IconProps>
