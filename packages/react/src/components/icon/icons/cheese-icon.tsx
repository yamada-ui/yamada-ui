"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cheese as OriginalCheeseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CheeseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CheeseIcon = component(Icon)({
  as: OriginalCheeseIcon,
}) as Component<"svg", IconProps>
