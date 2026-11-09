"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterD as OriginalSquareLetterDIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterDIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterDIcon = component(Icon)({
  as: OriginalSquareLetterDIcon,
}) as Component<"svg", IconProps>
