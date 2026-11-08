"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterT as OriginalSquareLetterTIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterTIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterTIcon = component(Icon)({
  as: OriginalSquareLetterTIcon,
}) as Component<"svg", IconProps>
