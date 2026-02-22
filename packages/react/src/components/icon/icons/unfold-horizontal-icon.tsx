"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UnfoldHorizontal as OriginalUnfoldHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UnfoldHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UnfoldHorizontalIcon = component(Icon)({
  as: OriginalUnfoldHorizontalIcon,
}) as Component<"svg", IconProps>
