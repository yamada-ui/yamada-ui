"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterR as OriginalSquareLetterRIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterRIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterRIcon = component(Icon)({
  as: OriginalSquareLetterRIcon,
}) as Component<"svg", IconProps>
