"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterB as OriginalSquareLetterBIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterBIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterBIcon = component(Icon)({
  as: OriginalSquareLetterBIcon,
}) as Component<"svg", IconProps>
