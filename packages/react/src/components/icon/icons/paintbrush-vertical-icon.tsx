"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PaintbrushVertical as OriginalPaintbrushVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PaintbrushVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PaintbrushVerticalIcon = component(Icon)({
  as: OriginalPaintbrushVerticalIcon,
}) as Component<"svg", IconProps>
