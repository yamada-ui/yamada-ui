"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CaptionsOff as OriginalCaptionsOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CaptionsOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CaptionsOffIcon = component(Icon)({
  as: OriginalCaptionsOffIcon,
}) as Component<"svg", IconProps>
