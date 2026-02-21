"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Scissors as OriginalScissorsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScissorsIcon = component(Icon)({
  as: OriginalScissorsIcon,
}) as Component<"svg", IconProps>
