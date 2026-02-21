"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PowerOff as OriginalPowerOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PowerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PowerOffIcon = component(Icon)({
  as: OriginalPowerOffIcon,
}) as Component<"svg", IconProps>
