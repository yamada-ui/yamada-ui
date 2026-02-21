"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Play as OriginalPlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlayIcon = component(Icon)({ as: OriginalPlayIcon }) as Component<
  "svg",
  IconProps
>
