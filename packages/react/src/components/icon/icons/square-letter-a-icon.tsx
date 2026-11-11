"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterA as OriginalSquareLetterAIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterAIcon = component(Icon)({
  as: OriginalSquareLetterAIcon,
}) as Component<"svg", IconProps>
