"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShoppingBasket as OriginalShoppingBasketIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShoppingBasketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShoppingBasketIcon = component(Icon)({
  as: OriginalShoppingBasketIcon,
}) as Component<"svg", IconProps>
