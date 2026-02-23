"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoonStar as OriginalMoonStarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoonStarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoonStarIcon = component(Icon)({
  as: OriginalMoonStarIcon,
}) as Component<"svg", IconProps>
