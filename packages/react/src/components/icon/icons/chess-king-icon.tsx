"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChessKing as OriginalChessKingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChessKingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChessKingIcon = component(Icon)({
  as: OriginalChessKingIcon,
}) as Component<"svg", IconProps>
