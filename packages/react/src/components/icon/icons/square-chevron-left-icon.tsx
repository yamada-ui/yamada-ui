"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronLeft as OriginalSquareChevronLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChevronLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChevronLeftIcon = component(Icon)({
  as: OriginalSquareChevronLeftIcon,
}) as Component<"svg", IconProps>
