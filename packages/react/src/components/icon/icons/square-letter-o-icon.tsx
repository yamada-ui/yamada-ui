"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLetterO as OriginalSquareLetterOIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLetterOIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLetterOIcon = component(Icon)({
  as: OriginalSquareLetterOIcon,
}) as Component<"svg", IconProps>
