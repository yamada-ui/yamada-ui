"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterY as OriginalSquareLetterYIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterYIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterYIcon = component(Icon)({
  as: OriginalSquareLetterYIcon,
}) as Component<"svg", IconProps>
