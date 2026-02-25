"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Radar as OriginalRadarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RadarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RadarIcon = component(Icon)({
  as: OriginalRadarIcon,
}) as Component<"svg", IconProps>
