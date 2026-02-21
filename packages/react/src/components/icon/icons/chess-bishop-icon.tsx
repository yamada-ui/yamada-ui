"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChessBishop as OriginalChessBishopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChessBishopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChessBishopIcon = component(Icon)({
  as: OriginalChessBishopIcon,
}) as Component<"svg", IconProps>
