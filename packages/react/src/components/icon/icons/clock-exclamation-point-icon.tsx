"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockExclamationPoint as OriginalClockExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockExclamationPointIcon = component(Icon)({
  as: OriginalClockExclamationPointIcon,
}) as Component<"svg", IconProps>
