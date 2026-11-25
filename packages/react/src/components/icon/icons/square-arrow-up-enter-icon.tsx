"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpEnter as OriginalSquareArrowUpEnterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpEnterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpEnterIcon = component(Icon)({
  as: OriginalSquareArrowUpEnterIcon,
}) as Component<"svg", IconProps>
