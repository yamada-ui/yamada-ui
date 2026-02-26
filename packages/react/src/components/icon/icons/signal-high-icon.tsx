"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SignalHigh as OriginalSignalHighIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SignalHighIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SignalHighIcon = component(Icon)({
  as: OriginalSignalHighIcon,
}) as Component<"svg", IconProps>
