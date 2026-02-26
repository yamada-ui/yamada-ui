"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SignalZero as OriginalSignalZeroIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SignalZeroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SignalZeroIcon = component(Icon)({
  as: OriginalSignalZeroIcon,
}) as Component<"svg", IconProps>
