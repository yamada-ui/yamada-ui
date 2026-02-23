"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CornerLeftDown as OriginalCornerLeftDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CornerLeftDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CornerLeftDownIcon = component(Icon)({
  as: OriginalCornerLeftDownIcon,
}) as Component<"svg", IconProps>
