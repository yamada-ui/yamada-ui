"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownExit as OriginalSquareArrowDownExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownExitIcon = component(Icon)({
  as: OriginalSquareArrowDownExitIcon,
}) as Component<"svg", IconProps>
