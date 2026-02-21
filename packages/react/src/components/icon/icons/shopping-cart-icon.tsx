"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShoppingCart as OriginalShoppingCartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShoppingCartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShoppingCartIcon = component(Icon)({
  as: OriginalShoppingCartIcon,
}) as Component<"svg", IconProps>
