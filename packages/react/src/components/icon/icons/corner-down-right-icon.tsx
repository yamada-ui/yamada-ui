"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CornerDownRight as OriginalCornerDownRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CornerDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CornerDownRightIcon = component(Icon)({
  as: OriginalCornerDownRightIcon,
}) as Component<"svg", IconProps>
