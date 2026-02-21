"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RectangleHorizontal as OriginalRectangleHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RectangleHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RectangleHorizontalIcon = component(Icon)({
  as: OriginalRectangleHorizontalIcon,
}) as Component<"svg", IconProps>
