"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Signal as OriginalSignalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SignalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SignalIcon = component(Icon)({
  as: OriginalSignalIcon,
}) as Component<"svg", IconProps>
