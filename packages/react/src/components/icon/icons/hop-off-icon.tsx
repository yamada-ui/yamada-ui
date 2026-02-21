"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HopOff as OriginalHopOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HopOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HopOffIcon = component(Icon)({
  as: OriginalHopOffIcon,
}) as Component<"svg", IconProps>
