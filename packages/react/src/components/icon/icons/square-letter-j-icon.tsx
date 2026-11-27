"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterJ as OriginalSquareLetterJIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterJIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterJIcon = component(Icon)({
  as: OriginalSquareLetterJIcon,
}) as Component<"svg", IconProps>
