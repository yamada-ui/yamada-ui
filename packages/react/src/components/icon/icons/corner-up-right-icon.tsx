"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CornerUpRight as OriginalCornerUpRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CornerUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CornerUpRightIcon = component(Icon)({
  as: OriginalCornerUpRightIcon,
}) as Component<"svg", IconProps>
