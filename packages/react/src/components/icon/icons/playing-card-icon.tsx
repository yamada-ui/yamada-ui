"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PlayingCard as OriginalPlayingCardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlayingCardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlayingCardIcon = component(Icon)({
  as: OriginalPlayingCardIcon,
}) as Component<"svg", IconProps>
