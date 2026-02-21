"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TouchpadOff as OriginalTouchpadOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TouchpadOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TouchpadOffIcon = component(Icon)({
  as: OriginalTouchpadOffIcon,
}) as Component<"svg", IconProps>
