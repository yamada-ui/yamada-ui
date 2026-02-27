"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hop as OriginalHopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HopIcon = component(Icon)({ as: OriginalHopIcon }) as Component<
  "svg",
  IconProps
>
