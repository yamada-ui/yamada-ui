"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUp as OriginalSquareArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpIcon = component(Icon)({
  as: OriginalSquareArrowUpIcon,
}) as Component<"svg", IconProps>
