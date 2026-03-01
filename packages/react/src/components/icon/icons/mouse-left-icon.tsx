"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MouseLeft as OriginalMouseLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MouseLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MouseLeftIcon = component(Icon)({
  as: OriginalMouseLeftIcon,
}) as Component<"svg", IconProps>
