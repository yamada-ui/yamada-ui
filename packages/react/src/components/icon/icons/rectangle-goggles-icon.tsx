"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RectangleGoggles as OriginalRectangleGogglesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RectangleGogglesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RectangleGogglesIcon = component(Icon)({
  as: OriginalRectangleGogglesIcon,
}) as Component<"svg", IconProps>
