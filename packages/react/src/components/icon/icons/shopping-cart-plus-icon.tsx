"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShoppingCartPlus as OriginalShoppingCartPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShoppingCartPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShoppingCartPlusIcon = component(Icon)({
  as: OriginalShoppingCartPlusIcon,
}) as Component<"svg", IconProps>
