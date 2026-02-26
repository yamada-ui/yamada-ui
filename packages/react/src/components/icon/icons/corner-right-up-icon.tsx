"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CornerRightUp as OriginalCornerRightUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CornerRightUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CornerRightUpIcon = component(Icon)({
  as: OriginalCornerRightUpIcon,
}) as Component<"svg", IconProps>
