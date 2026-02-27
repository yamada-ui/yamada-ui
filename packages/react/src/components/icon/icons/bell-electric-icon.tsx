"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BellElectric as OriginalBellElectricIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BellElectricIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BellElectricIcon = component(Icon)({
  as: OriginalBellElectricIcon,
}) as Component<"svg", IconProps>
