"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpRightExit as OriginalSquareArrowUpRightExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpRightExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpRightExitIcon = component(Icon)({
  as: OriginalSquareArrowUpRightExitIcon,
}) as Component<"svg", IconProps>
