"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PlayOff as OriginalPlayOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlayOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlayOffIcon = component(Icon)({
  as: OriginalPlayOffIcon,
}) as Component<"svg", IconProps>
