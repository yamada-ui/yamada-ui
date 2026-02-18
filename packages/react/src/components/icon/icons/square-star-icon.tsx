"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareStar as OriginalSquareStarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareStarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareStarIcon = component(Icon)({
  as: OriginalSquareStarIcon,
}) as Component<"svg", IconProps>
