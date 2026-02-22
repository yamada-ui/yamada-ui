"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedBottomCode as OriginalSquareDashedBottomCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedBottomCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedBottomCodeIcon = component(Icon)({
  as: OriginalSquareDashedBottomCodeIcon,
}) as Component<"svg", IconProps>
