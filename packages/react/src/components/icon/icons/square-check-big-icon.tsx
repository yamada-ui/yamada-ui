"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareCheckBig as OriginalSquareCheckBigIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareCheckBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareCheckBigIcon = component(Icon)({
  as: OriginalSquareCheckBigIcon,
}) as Component<"svg", IconProps>
