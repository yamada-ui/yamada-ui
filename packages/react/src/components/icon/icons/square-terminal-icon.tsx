"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareTerminal as OriginalSquareTerminalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareTerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareTerminalIcon = component(Icon)({
  as: OriginalSquareTerminalIcon,
}) as Component<"svg", IconProps>
