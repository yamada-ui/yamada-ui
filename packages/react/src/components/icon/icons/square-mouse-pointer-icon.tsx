"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareMousePointer as OriginalSquareMousePointerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareMousePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareMousePointerIcon = component(Icon)({
  as: OriginalSquareMousePointerIcon,
}) as Component<"svg", IconProps>
