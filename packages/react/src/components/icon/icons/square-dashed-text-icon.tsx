"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedText as OriginalSquareDashedTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedTextIcon = component(Icon)({
  as: OriginalSquareDashedTextIcon,
}) as Component<"svg", IconProps>
