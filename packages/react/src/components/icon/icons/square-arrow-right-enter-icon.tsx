"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowRightEnter as OriginalSquareArrowRightEnterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowRightEnterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowRightEnterIcon = component(Icon)({
  as: OriginalSquareArrowRightEnterIcon,
}) as Component<"svg", IconProps>
