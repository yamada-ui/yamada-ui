"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterM as OriginalSquareLetterMIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterMIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterMIcon = component(Icon)({
  as: OriginalSquareLetterMIcon,
}) as Component<"svg", IconProps>
