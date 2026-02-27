"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Haze as OriginalHazeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HazeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HazeIcon = component(Icon)({ as: OriginalHazeIcon }) as Component<
  "svg",
  IconProps
>
