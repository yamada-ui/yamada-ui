"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScissorsLineDashed as OriginalScissorsLineDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScissorsLineDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScissorsLineDashedIcon = component(Icon)({
  as: OriginalScissorsLineDashedIcon,
}) as Component<"svg", IconProps>
