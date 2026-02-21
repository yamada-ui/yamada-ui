"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDivide as OriginalSquareDivideIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDivideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDivideIcon = component(Icon)({
  as: OriginalSquareDivideIcon,
}) as Component<"svg", IconProps>
