"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedSearch as OriginalSquareDashedSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedSearchIcon = component(Icon)({
  as: OriginalSquareDashedSearchIcon,
}) as Component<"svg", IconProps>
