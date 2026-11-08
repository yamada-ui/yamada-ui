"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterV as OriginalSquareLetterVIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterVIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterVIcon = component(Icon)({
  as: OriginalSquareLetterVIcon,
}) as Component<"svg", IconProps>
