"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownRightExit as OriginalSquareArrowDownRightExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownRightExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownRightExitIcon = component(Icon)({
  as: OriginalSquareArrowDownRightExitIcon,
}) as Component<"svg", IconProps>
