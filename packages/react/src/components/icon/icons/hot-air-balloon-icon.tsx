"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HotAirBalloon as OriginalHotAirBalloonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HotAirBalloonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HotAirBalloonIcon = component(Icon)({
  as: OriginalHotAirBalloonIcon,
}) as Component<"svg", IconProps>
