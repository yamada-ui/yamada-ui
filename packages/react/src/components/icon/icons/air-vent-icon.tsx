"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AirVent as OriginalAirVentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AirVentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AirVentIcon = component(Icon)({
  as: OriginalAirVentIcon,
}) as Component<"svg", IconProps>
