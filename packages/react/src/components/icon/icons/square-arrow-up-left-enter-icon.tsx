"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpLeftEnter as OriginalSquareArrowUpLeftEnterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpLeftEnterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpLeftEnterIcon = component(Icon)({
  as: OriginalSquareArrowUpLeftEnterIcon,
}) as Component<"svg", IconProps>
