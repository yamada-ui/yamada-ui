"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCcwClock as OriginalRotateCcwClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RotateCcwClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RotateCcwClockIcon = component(Icon)({
  as: OriginalRotateCcwClockIcon,
}) as Component<"svg", IconProps>
