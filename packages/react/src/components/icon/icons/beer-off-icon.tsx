"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BeerOff as OriginalBeerOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BeerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BeerOffIcon = component(Icon)({
  as: OriginalBeerOffIcon,
}) as Component<"svg", IconProps>
