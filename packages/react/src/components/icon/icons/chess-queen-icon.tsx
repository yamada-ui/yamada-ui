"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChessQueen as OriginalChessQueenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChessQueenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChessQueenIcon = component(Icon)({
  as: OriginalChessQueenIcon,
}) as Component<"svg", IconProps>
