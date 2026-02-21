"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Star as OriginalStarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StarIcon = component(Icon)({ as: OriginalStarIcon }) as Component<
  "svg",
  IconProps
>
