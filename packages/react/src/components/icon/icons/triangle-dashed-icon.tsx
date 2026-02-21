"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TriangleDashed as OriginalTriangleDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TriangleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TriangleDashedIcon = component(Icon)({
  as: OriginalTriangleDashedIcon,
}) as Component<"svg", IconProps>
