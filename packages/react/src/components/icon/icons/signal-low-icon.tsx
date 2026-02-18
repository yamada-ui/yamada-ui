"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SignalLow as OriginalSignalLowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SignalLowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SignalLowIcon = component(Icon)({
  as: OriginalSignalLowIcon,
}) as Component<"svg", IconProps>
