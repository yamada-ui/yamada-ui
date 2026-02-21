"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Captions as OriginalCaptionsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CaptionsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CaptionsIcon = component(Icon)({
  as: OriginalCaptionsIcon,
}) as Component<"svg", IconProps>
