"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PinOff as OriginalPinOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PinOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PinOffIcon = component(Icon)({
  as: OriginalPinOffIcon,
}) as Component<"svg", IconProps>
