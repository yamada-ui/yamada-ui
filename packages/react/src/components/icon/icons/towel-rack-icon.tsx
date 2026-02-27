"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TowelRack as OriginalTowelRackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TowelRackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TowelRackIcon = component(Icon)({
  as: OriginalTowelRackIcon,
}) as Component<"svg", IconProps>
