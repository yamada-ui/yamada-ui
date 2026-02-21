"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Paintbrush as OriginalPaintbrushIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PaintbrushIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PaintbrushIcon = component(Icon)({
  as: OriginalPaintbrushIcon,
}) as Component<"svg", IconProps>
