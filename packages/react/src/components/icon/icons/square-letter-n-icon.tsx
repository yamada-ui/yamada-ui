"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterN as OriginalSquareLetterNIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterNIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterNIcon = component(Icon)({
  as: OriginalSquareLetterNIcon,
}) as Component<"svg", IconProps>
