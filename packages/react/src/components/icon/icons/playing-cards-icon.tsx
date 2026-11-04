"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PlayingCards as OriginalPlayingCardsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlayingCardsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlayingCardsIcon = component(Icon)({
  as: OriginalPlayingCardsIcon,
}) as Component<"svg", IconProps>
