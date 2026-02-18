"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dessert as OriginalDessertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DessertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DessertIcon = component(Icon)({
  as: OriginalDessertIcon,
}) as Component<"svg", IconProps>
