"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedX as OriginalSquareDashedXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedXIcon = component(Icon)({
  as: OriginalSquareDashedXIcon,
}) as Component<"svg", IconProps>
