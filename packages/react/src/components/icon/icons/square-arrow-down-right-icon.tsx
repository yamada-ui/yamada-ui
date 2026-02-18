"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownRight as OriginalSquareArrowDownRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownRightIcon = component(Icon)({
  as: OriginalSquareArrowDownRightIcon,
}) as Component<"svg", IconProps>
