"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownRightEnter as OriginalSquareArrowDownRightEnterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownRightEnterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownRightEnterIcon = component(Icon)({
  as: OriginalSquareArrowDownRightEnterIcon,
}) as Component<"svg", IconProps>
