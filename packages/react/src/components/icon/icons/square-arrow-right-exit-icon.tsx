"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowRightExit as OriginalSquareArrowRightExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowRightExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowRightExitIcon = component(Icon)({
  as: OriginalSquareArrowRightExitIcon,
}) as Component<"svg", IconProps>
