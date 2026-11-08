"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterC as OriginalSquareLetterCIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterCIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterCIcon = component(Icon)({
  as: OriginalSquareLetterCIcon,
}) as Component<"svg", IconProps>
