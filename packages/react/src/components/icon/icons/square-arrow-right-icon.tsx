"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowRight as OriginalSquareArrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowRightIcon = component(Icon)({
  as: OriginalSquareArrowRightIcon,
}) as Component<"svg", IconProps>
