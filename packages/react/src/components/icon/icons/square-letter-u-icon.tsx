"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterU as OriginalSquareLetterUIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterUIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterUIcon = component(Icon)({
  as: OriginalSquareLetterUIcon,
}) as Component<"svg", IconProps>
