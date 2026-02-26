"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Triangle as OriginalTriangleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TriangleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TriangleIcon = component(Icon)({
  as: OriginalTriangleIcon,
}) as Component<"svg", IconProps>
