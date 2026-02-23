"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronRight as OriginalSquareChevronRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChevronRightIcon = component(Icon)({
  as: OriginalSquareChevronRightIcon,
}) as Component<"svg", IconProps>
