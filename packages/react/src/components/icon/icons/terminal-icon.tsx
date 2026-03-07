"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Terminal as OriginalTerminalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TerminalIcon = component(Icon)({
  as: OriginalTerminalIcon,
}) as Component<"svg", IconProps>
