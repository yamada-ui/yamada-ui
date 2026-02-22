"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShoppingBag as OriginalShoppingBagIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShoppingBagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShoppingBagIcon = component(Icon)({
  as: OriginalShoppingBagIcon,
}) as Component<"svg", IconProps>
