"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterS as OriginalSquareLetterSIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterSIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterSIcon = component(Icon)({
  as: OriginalSquareLetterSIcon,
}) as Component<"svg", IconProps>
