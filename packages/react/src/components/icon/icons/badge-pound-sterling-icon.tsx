"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgePoundSterling as OriginalBadgePoundSterlingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgePoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgePoundSterlingIcon = component(Icon)({
  as: OriginalBadgePoundSterlingIcon,
}) as Component<"svg", IconProps>
