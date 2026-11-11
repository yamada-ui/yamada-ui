"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterP as OriginalSquareLetterPIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterPIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterPIcon = component(Icon)({
  as: OriginalSquareLetterPIcon,
}) as Component<"svg", IconProps>
