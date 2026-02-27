"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StretchHorizontal as OriginalStretchHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StretchHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StretchHorizontalIcon = component(Icon)({
  as: OriginalStretchHorizontalIcon,
}) as Component<"svg", IconProps>
