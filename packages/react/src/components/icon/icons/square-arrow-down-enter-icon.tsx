"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownEnter as OriginalSquareArrowDownEnterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownEnterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownEnterIcon = component(Icon)({
  as: OriginalSquareArrowDownEnterIcon,
}) as Component<"svg", IconProps>
