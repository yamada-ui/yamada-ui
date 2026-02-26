"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorSpeaker as OriginalMonitorSpeakerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorSpeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorSpeakerIcon = component(Icon)({
  as: OriginalMonitorSpeakerIcon,
}) as Component<"svg", IconProps>
