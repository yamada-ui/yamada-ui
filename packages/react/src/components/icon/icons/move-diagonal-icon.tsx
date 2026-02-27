"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveDiagonal as OriginalMoveDiagonalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveDiagonalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveDiagonalIcon = component(Icon)({
  as: OriginalMoveDiagonalIcon,
}) as Component<"svg", IconProps>
