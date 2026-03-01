"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Car as OriginalCarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CarIcon = component(Icon)({ as: OriginalCarIcon }) as Component<
  "svg",
  IconProps
>
