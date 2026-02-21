"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareAsterisk as OriginalSquareAsteriskIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareAsteriskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareAsteriskIcon = component(Icon)({
  as: OriginalSquareAsteriskIcon,
}) as Component<"svg", IconProps>
