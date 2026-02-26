"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pizza as OriginalPizzaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PizzaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PizzaIcon = component(Icon)({
  as: OriginalPizzaIcon,
}) as Component<"svg", IconProps>
