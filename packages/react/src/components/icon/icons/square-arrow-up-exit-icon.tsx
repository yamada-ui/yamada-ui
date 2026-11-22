"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpExit as OriginalSquareArrowUpExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpExitIcon = component(Icon)({
  as: OriginalSquareArrowUpExitIcon,
}) as Component<"svg", IconProps>
