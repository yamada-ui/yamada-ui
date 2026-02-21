"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePlay as OriginalSquarePlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePlayIcon = component(Icon)({
  as: OriginalSquarePlayIcon,
}) as Component<"svg", IconProps>
