"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DiamondMinus as OriginalDiamondMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiamondMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiamondMinusIcon = component(Icon)({
  as: OriginalDiamondMinusIcon,
}) as Component<"svg", IconProps>
