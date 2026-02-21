"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowOutDownLeft as OriginalSquareArrowOutDownLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowOutDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowOutDownLeftIcon = component(Icon)({
  as: OriginalSquareArrowOutDownLeftIcon,
}) as Component<"svg", IconProps>
