"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleGauge as OriginalCircleGaugeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleGaugeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleGaugeIcon = component(Icon)({
  as: OriginalCircleGaugeIcon,
}) as Component<"svg", IconProps>
