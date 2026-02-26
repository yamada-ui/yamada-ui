"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleStop as OriginalCircleStopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleStopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleStopIcon = component(Icon)({
  as: OriginalCircleStopIcon,
}) as Component<"svg", IconProps>
