"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowOutUpRight as OriginalSquareArrowOutUpRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowOutUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowOutUpRightIcon = component(Icon)({
  as: OriginalSquareArrowOutUpRightIcon,
}) as Component<"svg", IconProps>
