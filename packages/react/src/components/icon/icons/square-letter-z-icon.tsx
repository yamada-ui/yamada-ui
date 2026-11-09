"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterZ as OriginalSquareLetterZIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterZIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterZIcon = component(Icon)({
  as: OriginalSquareLetterZIcon,
}) as Component<"svg", IconProps>
