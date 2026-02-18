"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedBottom as OriginalSquareDashedBottomIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedBottomIcon = component(Icon)({
  as: OriginalSquareDashedBottomIcon,
}) as Component<"svg", IconProps>
