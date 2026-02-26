"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { OctagonPause as OriginalOctagonPauseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OctagonPauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OctagonPauseIcon = component(Icon)({
  as: OriginalOctagonPauseIcon,
}) as Component<"svg", IconProps>
