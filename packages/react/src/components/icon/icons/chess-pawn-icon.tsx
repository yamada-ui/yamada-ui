"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChessPawn as OriginalChessPawnIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChessPawnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChessPawnIcon = component(Icon)({
  as: OriginalChessPawnIcon,
}) as Component<"svg", IconProps>
