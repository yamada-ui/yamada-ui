"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EyeOff as OriginalEyeOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EyeOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EyeOffIcon = component(Icon)({
  as: OriginalEyeOffIcon,
}) as Component<"svg", IconProps>
