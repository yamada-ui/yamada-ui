"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MicOff as OriginalMicOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MicOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MicOffIcon = component(Icon)({
  as: OriginalMicOffIcon,
}) as Component<"svg", IconProps>
