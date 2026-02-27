"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CornerDownLeft as OriginalCornerDownLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CornerDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CornerDownLeftIcon = component(Icon)({
  as: OriginalCornerDownLeftIcon,
}) as Component<"svg", IconProps>
