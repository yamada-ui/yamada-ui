"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChessRook as OriginalChessRookIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChessRookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChessRookIcon = component(Icon)({
  as: OriginalChessRookIcon,
}) as Component<"svg", IconProps>
