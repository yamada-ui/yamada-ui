"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronsLeft as OriginalSquareChevronsLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChevronsLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChevronsLeftIcon = component(Icon)({
  as: OriginalSquareChevronsLeftIcon,
}) as Component<"svg", IconProps>
