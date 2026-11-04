"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedXCorner as OriginalSquareDashedXCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedXCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedXCornerIcon = component(Icon)({
  as: OriginalSquareDashedXCornerIcon,
}) as Component<"svg", IconProps>
