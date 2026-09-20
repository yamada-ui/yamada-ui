"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShoppingCartMinus as OriginalShoppingCartMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShoppingCartMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShoppingCartMinusIcon = component(Icon)({
  as: OriginalShoppingCartMinusIcon,
}) as Component<"svg", IconProps>
