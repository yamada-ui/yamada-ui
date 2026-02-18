"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Venus as OriginalVenusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VenusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VenusIcon = component(Icon)({
  as: OriginalVenusIcon,
}) as Component<"svg", IconProps>
