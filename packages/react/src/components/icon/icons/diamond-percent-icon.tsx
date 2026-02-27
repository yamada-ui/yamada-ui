"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DiamondPercent as OriginalDiamondPercentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiamondPercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiamondPercentIcon = component(Icon)({
  as: OriginalDiamondPercentIcon,
}) as Component<"svg", IconProps>
