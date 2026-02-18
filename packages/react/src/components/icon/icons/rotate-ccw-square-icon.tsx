"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCcwSquare as OriginalRotateCcwSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RotateCcwSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RotateCcwSquareIcon = component(Icon)({
  as: OriginalRotateCcwSquareIcon,
}) as Component<"svg", IconProps>
