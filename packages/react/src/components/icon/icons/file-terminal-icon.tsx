"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileTerminal as OriginalFileTerminalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileTerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileTerminalIcon = component(Icon)({
  as: OriginalFileTerminalIcon,
}) as Component<"svg", IconProps>
