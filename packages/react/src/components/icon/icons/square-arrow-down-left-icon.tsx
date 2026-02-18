"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownLeft as OriginalSquareArrowDownLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownLeftIcon = component(Icon)({
  as: OriginalSquareArrowDownLeftIcon,
}) as Component<"svg", IconProps>
