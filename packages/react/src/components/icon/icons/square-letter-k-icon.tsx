"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterK as OriginalSquareLetterKIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterKIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterKIcon = component(Icon)({
  as: OriginalSquareLetterKIcon,
}) as Component<"svg", IconProps>
