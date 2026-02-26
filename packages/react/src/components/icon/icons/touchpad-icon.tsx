"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Touchpad as OriginalTouchpadIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TouchpadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TouchpadIcon = component(Icon)({
  as: OriginalTouchpadIcon,
}) as Component<"svg", IconProps>
