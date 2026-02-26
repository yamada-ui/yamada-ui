"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronDown as OriginalSquareChevronDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChevronDownIcon = component(Icon)({
  as: OriginalSquareChevronDownIcon,
}) as Component<"svg", IconProps>
