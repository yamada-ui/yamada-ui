"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CakeSlice as OriginalCakeSliceIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CakeSliceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CakeSliceIcon = component(Icon)({
  as: OriginalCakeSliceIcon,
}) as Component<"svg", IconProps>
