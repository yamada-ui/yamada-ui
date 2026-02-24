"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScreenShare as OriginalScreenShareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScreenShareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScreenShareIcon = component(Icon)({
  as: OriginalScreenShareIcon,
}) as Component<"svg", IconProps>
