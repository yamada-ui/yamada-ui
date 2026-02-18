"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareEqual as OriginalSquareEqualIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareEqualIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareEqualIcon = component(Icon)({
  as: OriginalSquareEqualIcon,
}) as Component<"svg", IconProps>
