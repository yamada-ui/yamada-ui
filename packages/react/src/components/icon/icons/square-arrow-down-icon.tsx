"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDown as OriginalSquareArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowDownIcon = component(Icon)({
  as: OriginalSquareArrowDownIcon,
}) as Component<"svg", IconProps>
