"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Gauge as OriginalGaugeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GaugeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GaugeIcon = component(Icon)({
  as: OriginalGaugeIcon,
}) as Component<"svg", IconProps>
