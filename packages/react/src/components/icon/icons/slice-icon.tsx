"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Slice as OriginalSliceIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SliceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SliceIcon = component(Icon)({
  as: OriginalSliceIcon,
}) as Component<"svg", IconProps>
