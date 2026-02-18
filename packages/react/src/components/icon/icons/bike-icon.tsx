"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bike as OriginalBikeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BikeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BikeIcon = component(Icon)({ as: OriginalBikeIcon }) as Component<
  "svg",
  IconProps
>
