"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DollarSign as OriginalDollarSignIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DollarSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DollarSignIcon = component(Icon)({
  as: OriginalDollarSignIcon,
}) as Component<"svg", IconProps>
