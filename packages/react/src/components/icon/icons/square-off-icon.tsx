"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareOff as OriginalSquareOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareOffIcon = component(Icon)({
  as: OriginalSquareOffIcon,
}) as Component<"svg", IconProps>
