"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TriangleRight as OriginalTriangleRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TriangleRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TriangleRightIcon = component(Icon)({
  as: OriginalTriangleRightIcon,
}) as Component<"svg", IconProps>
