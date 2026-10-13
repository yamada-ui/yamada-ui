"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Houses as OriginalHousesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HousesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HousesIcon = component(Icon)({
  as: OriginalHousesIcon,
}) as Component<"svg", IconProps>
