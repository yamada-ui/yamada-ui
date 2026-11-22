"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterH as OriginalSquareLetterHIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterHIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterHIcon = component(Icon)({
  as: OriginalSquareLetterHIcon,
}) as Component<"svg", IconProps>
