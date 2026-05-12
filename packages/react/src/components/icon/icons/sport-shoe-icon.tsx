"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SportShoe as OriginalSportShoeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SportShoeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SportShoeIcon = component(Icon)({
  as: OriginalSportShoeIcon,
}) as Component<"svg", IconProps>
