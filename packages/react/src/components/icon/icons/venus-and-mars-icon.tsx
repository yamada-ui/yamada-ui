"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VenusAndMars as OriginalVenusAndMarsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VenusAndMarsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VenusAndMarsIcon = component(Icon)({
  as: OriginalVenusAndMarsIcon,
}) as Component<"svg", IconProps>
