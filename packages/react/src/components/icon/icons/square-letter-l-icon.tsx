"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterL as OriginalSquareLetterLIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterLIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterLIcon = component(Icon)({
  as: OriginalSquareLetterLIcon,
}) as Component<"svg", IconProps>
