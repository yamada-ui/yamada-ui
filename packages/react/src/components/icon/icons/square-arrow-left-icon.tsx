"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowLeft as OriginalSquareArrowLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowLeftIcon = component(Icon)({
  as: OriginalSquareArrowLeftIcon,
}) as Component<"svg", IconProps>
