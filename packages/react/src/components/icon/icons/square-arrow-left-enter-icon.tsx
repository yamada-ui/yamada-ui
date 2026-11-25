"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowLeftEnter as OriginalSquareArrowLeftEnterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowLeftEnterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowLeftEnterIcon = component(Icon)({
  as: OriginalSquareArrowLeftEnterIcon,
}) as Component<"svg", IconProps>
