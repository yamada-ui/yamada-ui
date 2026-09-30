"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MicSignal as OriginalMicSignalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MicSignalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MicSignalIcon = component(Icon)({
  as: OriginalMicSignalIcon,
}) as Component<"svg", IconProps>
