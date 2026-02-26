"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareCheck as OriginalSquareCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareCheckIcon = component(Icon)({
  as: OriginalSquareCheckIcon,
}) as Component<"svg", IconProps>
