"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScreenShareOff as OriginalScreenShareOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScreenShareOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScreenShareOffIcon = component(Icon)({
  as: OriginalScreenShareOffIcon,
}) as Component<"svg", IconProps>
