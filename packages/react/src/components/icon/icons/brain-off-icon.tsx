"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BrainOff as OriginalBrainOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrainOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrainOffIcon = component(Icon)({
  as: OriginalBrainOffIcon,
}) as Component<"svg", IconProps>
