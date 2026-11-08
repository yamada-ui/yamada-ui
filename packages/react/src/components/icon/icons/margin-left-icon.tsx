"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MarginLeft as OriginalMarginLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MarginLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MarginLeftIcon = component(Icon)({
  as: OriginalMarginLeftIcon,
}) as Component<"svg", IconProps>
