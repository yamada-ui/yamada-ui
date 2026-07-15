"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EyeDashed as OriginalEyeDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EyeDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EyeDashedIcon = component(Icon)({
  as: OriginalEyeDashedIcon,
}) as Component<"svg", IconProps>
