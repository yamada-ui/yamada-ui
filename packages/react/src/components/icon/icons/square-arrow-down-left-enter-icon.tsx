"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownLeftEnter as OriginalSquareArrowDownLeftEnterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownLeftEnterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownLeftEnterIcon = component(Icon)({
  as: OriginalSquareArrowDownLeftEnterIcon,
}) as Component<"svg", IconProps>
