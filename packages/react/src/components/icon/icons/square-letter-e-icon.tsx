"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterE as OriginalSquareLetterEIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterEIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterEIcon = component(Icon)({
  as: OriginalSquareLetterEIcon,
}) as Component<"svg", IconProps>
