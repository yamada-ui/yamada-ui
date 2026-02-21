"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MilkOff as OriginalMilkOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MilkOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MilkOffIcon = component(Icon)({
  as: OriginalMilkOffIcon,
}) as Component<"svg", IconProps>
