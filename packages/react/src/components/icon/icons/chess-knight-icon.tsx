"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChessKnight as OriginalChessKnightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChessKnightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChessKnightIcon = component(Icon)({
  as: OriginalChessKnightIcon,
}) as Component<"svg", IconProps>
