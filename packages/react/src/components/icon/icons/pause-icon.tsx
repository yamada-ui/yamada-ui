"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pause as OriginalPauseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PauseIcon = component(Icon)({
  as: OriginalPauseIcon,
}) as Component<"svg", IconProps>
