"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareX as OriginalSquareXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareXIcon = component(Icon)({
  as: OriginalSquareXIcon,
}) as Component<"svg", IconProps>
