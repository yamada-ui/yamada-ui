"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSquare as OriginalSquareSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareSquareIcon = component(Icon)({
  as: OriginalSquareSquareIcon,
}) as Component<"svg", IconProps>
