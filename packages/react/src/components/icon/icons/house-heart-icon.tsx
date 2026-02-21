"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HouseHeart as OriginalHouseHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HouseHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HouseHeartIcon = component(Icon)({
  as: OriginalHouseHeartIcon,
}) as Component<"svg", IconProps>
