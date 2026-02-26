"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCwSquare as OriginalRotateCwSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RotateCwSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RotateCwSquareIcon = component(Icon)({
  as: OriginalRotateCwSquareIcon,
}) as Component<"svg", IconProps>
