"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BellOff as OriginalBellOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BellOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BellOffIcon = component(Icon)({
  as: OriginalBellOffIcon,
}) as Component<"svg", IconProps>
