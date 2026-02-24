"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareMenu as OriginalSquareMenuIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareMenuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareMenuIcon = component(Icon)({
  as: OriginalSquareMenuIcon,
}) as Component<"svg", IconProps>
