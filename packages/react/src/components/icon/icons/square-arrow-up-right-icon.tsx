"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpRight as OriginalSquareArrowUpRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpRightIcon = component(Icon)({
  as: OriginalSquareArrowUpRightIcon,
}) as Component<"svg", IconProps>
