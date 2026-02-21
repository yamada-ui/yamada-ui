"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Beer as OriginalBeerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BeerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BeerIcon = component(Icon)({ as: OriginalBeerIcon }) as Component<
  "svg",
  IconProps
>
