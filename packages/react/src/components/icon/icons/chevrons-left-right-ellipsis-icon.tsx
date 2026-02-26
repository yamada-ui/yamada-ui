"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsLeftRightEllipsis as OriginalChevronsLeftRightEllipsisIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsLeftRightEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsLeftRightEllipsisIcon = component(Icon)({
  as: OriginalChevronsLeftRightEllipsisIcon,
}) as Component<"svg", IconProps>
