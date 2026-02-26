"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashed as OriginalSquareDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedIcon = component(Icon)({
  as: OriginalSquareDashedIcon,
}) as Component<"svg", IconProps>
