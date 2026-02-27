"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquaresSubtract as OriginalSquaresSubtractIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquaresSubtractIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquaresSubtractIcon = component(Icon)({
  as: OriginalSquaresSubtractIcon,
}) as Component<"svg", IconProps>
