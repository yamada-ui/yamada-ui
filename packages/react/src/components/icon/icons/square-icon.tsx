"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Square as OriginalSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareIcon = component(Icon)({
  as: OriginalSquareIcon,
}) as Component<"svg", IconProps>
