"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterF as OriginalSquareLetterFIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterFIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterFIcon = component(Icon)({
  as: OriginalSquareLetterFIcon,
}) as Component<"svg", IconProps>
