"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EyeClosed as OriginalEyeClosedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EyeClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EyeClosedIcon = component(Icon)({
  as: OriginalEyeClosedIcon,
}) as Component<"svg", IconProps>
