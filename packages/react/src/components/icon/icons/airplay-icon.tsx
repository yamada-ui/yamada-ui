"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Airplay as OriginalAirplayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AirplayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AirplayIcon = component(Icon)({
  as: OriginalAirplayIcon,
}) as Component<"svg", IconProps>
