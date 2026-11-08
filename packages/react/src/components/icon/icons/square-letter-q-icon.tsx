"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterQ as OriginalSquareLetterQIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterQIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterQIcon = component(Icon)({
  as: OriginalSquareLetterQIcon,
}) as Component<"svg", IconProps>
