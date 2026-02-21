"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CornerLeftUp as OriginalCornerLeftUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CornerLeftUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CornerLeftUpIcon = component(Icon)({
  as: OriginalCornerLeftUpIcon,
}) as Component<"svg", IconProps>
