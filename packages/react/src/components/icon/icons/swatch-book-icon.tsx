"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SwatchBook as OriginalSwatchBookIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SwatchBookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SwatchBookIcon = component(Icon)({
  as: OriginalSwatchBookIcon,
}) as Component<"svg", IconProps>
