"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockArrowLeft as OriginalClockArrowLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockArrowLeftIcon = component(Icon)({
  as: OriginalClockArrowLeftIcon,
}) as Component<"svg", IconProps>
