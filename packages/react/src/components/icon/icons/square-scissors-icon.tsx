"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareScissors as OriginalSquareScissorsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareScissorsIcon = component(Icon)({
  as: OriginalSquareScissorsIcon,
}) as Component<"svg", IconProps>
