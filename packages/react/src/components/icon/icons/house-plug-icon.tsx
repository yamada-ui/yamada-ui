"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HousePlug as OriginalHousePlugIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HousePlugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HousePlugIcon = component(Icon)({
  as: OriginalHousePlugIcon,
}) as Component<"svg", IconProps>
