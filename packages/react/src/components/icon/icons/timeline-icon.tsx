"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Timeline as OriginalTimelineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TimelineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TimelineIcon = component(Icon)({
  as: OriginalTimelineIcon,
}) as Component<"svg", IconProps>
