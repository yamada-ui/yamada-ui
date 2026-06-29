"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockArrowRight as OriginalClockArrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockArrowRightIcon = component(Icon)({
  as: OriginalClockArrowRightIcon,
}) as Component<"svg", IconProps>
