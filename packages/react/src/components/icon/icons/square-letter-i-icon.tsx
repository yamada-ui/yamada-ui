"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterI as OriginalSquareLetterIIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterIIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterIIcon = component(Icon)({
  as: OriginalSquareLetterIIcon,
}) as Component<"svg", IconProps>
