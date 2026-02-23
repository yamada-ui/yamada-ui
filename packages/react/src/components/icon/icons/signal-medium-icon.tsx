"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SignalMedium as OriginalSignalMediumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SignalMediumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SignalMediumIcon = component(Icon)({
  as: OriginalSignalMediumIcon,
}) as Component<"svg", IconProps>
