"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSlash as OriginalSquareSlashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareSlashIcon = component(Icon)({
  as: OriginalSquareSlashIcon,
}) as Component<"svg", IconProps>
