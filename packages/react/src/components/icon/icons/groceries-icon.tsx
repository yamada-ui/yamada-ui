"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Groceries as OriginalGroceriesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GroceriesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GroceriesIcon = component(Icon)({
  as: OriginalGroceriesIcon,
}) as Component<"svg", IconProps>
