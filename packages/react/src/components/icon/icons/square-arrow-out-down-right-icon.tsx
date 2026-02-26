"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowOutDownRight as OriginalSquareArrowOutDownRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowOutDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowOutDownRightIcon = component(Icon)({
  as: OriginalSquareArrowOutDownRightIcon,
}) as Component<"svg", IconProps>
