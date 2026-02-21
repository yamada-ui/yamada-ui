"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronUp as OriginalSquareChevronUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChevronUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChevronUpIcon = component(Icon)({
  as: OriginalSquareChevronUpIcon,
}) as Component<"svg", IconProps>
