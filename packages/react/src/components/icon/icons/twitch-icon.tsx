"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Twitch as OriginalTwitchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TwitchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TwitchIcon = component(Icon)({
  as: OriginalTwitchIcon,
}) as Component<"svg", IconProps>
