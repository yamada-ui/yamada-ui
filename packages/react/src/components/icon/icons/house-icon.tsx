"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { House as OriginalHouseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HouseIcon = component(Icon)({
  as: OriginalHouseIcon,
}) as Component<"svg", IconProps>
