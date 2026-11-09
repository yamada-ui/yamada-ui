"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterG as OriginalSquareLetterGIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterGIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterGIcon = component(Icon)({
  as: OriginalSquareLetterGIcon,
}) as Component<"svg", IconProps>
