"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDot as OriginalSquareDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDotIcon = component(Icon)({
  as: OriginalSquareDotIcon,
}) as Component<"svg", IconProps>
