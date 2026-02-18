"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePercent as OriginalSquarePercentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePercentIcon = component(Icon)({
  as: OriginalSquarePercentIcon,
}) as Component<"svg", IconProps>
