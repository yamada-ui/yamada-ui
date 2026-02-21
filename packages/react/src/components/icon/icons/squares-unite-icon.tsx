"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquaresUnite as OriginalSquaresUniteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquaresUniteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquaresUniteIcon = component(Icon)({
  as: OriginalSquaresUniteIcon,
}) as Component<"svg", IconProps>
