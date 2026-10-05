"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PlayingCardsFan as OriginalPlayingCardsFanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlayingCardsFanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlayingCardsFanIcon = component(Icon)({
  as: OriginalPlayingCardsFanIcon,
}) as Component<"svg", IconProps>
