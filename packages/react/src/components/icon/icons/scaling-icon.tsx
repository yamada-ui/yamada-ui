"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Scaling as OriginalScalingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScalingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScalingIcon = component(Icon)({
  as: OriginalScalingIcon,
}) as Component<"svg", IconProps>
