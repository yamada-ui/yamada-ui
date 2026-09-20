"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TicTacToe as OriginalTicTacToeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicTacToeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicTacToeIcon = component(Icon)({
  as: OriginalTicTacToeIcon,
}) as Component<"svg", IconProps>
