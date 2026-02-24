"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VideoOff as OriginalVideoOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VideoOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VideoOffIcon = component(Icon)({
  as: OriginalVideoOffIcon,
}) as Component<"svg", IconProps>
