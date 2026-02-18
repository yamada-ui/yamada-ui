"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Trophy as OriginalTrophyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrophyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrophyIcon = component(Icon)({
  as: OriginalTrophyIcon,
}) as Component<"svg", IconProps>
