"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePoundSterling as OriginalCirclePoundSterlingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CirclePoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CirclePoundSterlingIcon = component(Icon)({
  as: OriginalCirclePoundSterlingIcon,
}) as Component<"svg", IconProps>
