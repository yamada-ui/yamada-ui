"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GuitarElectric as OriginalGuitarElectricIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GuitarElectricIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GuitarElectricIcon = component(Icon)({
  as: OriginalGuitarElectricIcon,
}) as Component<"svg", IconProps>
