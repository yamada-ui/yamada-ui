"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PaintRoller as OriginalPaintRollerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PaintRollerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PaintRollerIcon = component(Icon)({
  as: OriginalPaintRollerIcon,
}) as Component<"svg", IconProps>
