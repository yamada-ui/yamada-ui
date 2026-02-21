"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquaresExclude as OriginalSquaresExcludeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquaresExcludeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquaresExcludeIcon = component(Icon)({
  as: OriginalSquaresExcludeIcon,
}) as Component<"svg", IconProps>
