"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquaresIntersect as OriginalSquaresIntersectIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquaresIntersectIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquaresIntersectIcon = component(Icon)({
  as: OriginalSquaresIntersectIcon,
}) as Component<"svg", IconProps>
