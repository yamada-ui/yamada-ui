"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpRightEnter as OriginalSquareArrowUpRightEnterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpRightEnterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpRightEnterIcon = component(Icon)({
  as: OriginalSquareArrowUpRightEnterIcon,
}) as Component<"svg", IconProps>
