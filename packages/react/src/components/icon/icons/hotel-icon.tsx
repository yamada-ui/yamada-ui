"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hotel as OriginalHotelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HotelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HotelIcon = component(Icon)({
  as: OriginalHotelIcon,
}) as Component<"svg", IconProps>
