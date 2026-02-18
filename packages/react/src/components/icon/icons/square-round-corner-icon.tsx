"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareRoundCorner as OriginalSquareRoundCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareRoundCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareRoundCornerIcon = component(Icon)({
  as: OriginalSquareRoundCornerIcon,
}) as Component<"svg", IconProps>
