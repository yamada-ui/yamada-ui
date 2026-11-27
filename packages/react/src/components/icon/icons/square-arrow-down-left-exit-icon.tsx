"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownLeftExit as OriginalSquareArrowDownLeftExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownLeftExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownLeftExitIcon = component(Icon)({
  as: OriginalSquareArrowDownLeftExitIcon,
}) as Component<"svg", IconProps>
