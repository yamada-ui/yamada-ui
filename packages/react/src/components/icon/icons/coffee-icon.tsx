"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Coffee as OriginalCoffeeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CoffeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CoffeeIcon = component(Icon)({
  as: OriginalCoffeeIcon,
}) as Component<"svg", IconProps>
