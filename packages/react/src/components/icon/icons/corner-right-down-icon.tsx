"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CornerRightDown as OriginalCornerRightDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CornerRightDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CornerRightDownIcon = component(Icon)({
  as: OriginalCornerRightDownIcon,
}) as Component<"svg", IconProps>
