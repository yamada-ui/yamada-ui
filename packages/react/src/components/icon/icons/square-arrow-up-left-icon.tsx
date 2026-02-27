"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpLeft as OriginalSquareArrowUpLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpLeftIcon = component(Icon)({
  as: OriginalSquareArrowUpLeftIcon,
}) as Component<"svg", IconProps>
