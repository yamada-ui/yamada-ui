"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleEllipsis as OriginalCircleEllipsisIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleEllipsisIcon = component(Icon)({
  as: OriginalCircleEllipsisIcon,
}) as Component<"svg", IconProps>
