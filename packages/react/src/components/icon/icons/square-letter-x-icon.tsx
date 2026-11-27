"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterX as OriginalSquareLetterXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterXIcon = component(Icon)({
  as: OriginalSquareLetterXIcon,
}) as Component<"svg", IconProps>
