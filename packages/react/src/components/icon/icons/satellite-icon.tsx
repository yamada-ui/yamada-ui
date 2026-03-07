"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Satellite as OriginalSatelliteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SatelliteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SatelliteIcon = component(Icon)({
  as: OriginalSatelliteIcon,
}) as Component<"svg", IconProps>
