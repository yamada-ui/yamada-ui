"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RectangleVertical as OriginalRectangleVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RectangleVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RectangleVerticalIcon = component(Icon)({
  as: OriginalRectangleVerticalIcon,
}) as Component<"svg", IconProps>
