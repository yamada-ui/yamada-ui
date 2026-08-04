"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCwFadingClock as OriginalRotateCwFadingClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RotateCwFadingClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RotateCwFadingClockIcon = component(Icon)({
  as: OriginalRotateCwFadingClockIcon,
}) as Component<"svg", IconProps>
