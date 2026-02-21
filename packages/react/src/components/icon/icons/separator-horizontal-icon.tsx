"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SeparatorHorizontal as OriginalSeparatorHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SeparatorHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SeparatorHorizontalIcon = component(Icon)({
  as: OriginalSeparatorHorizontalIcon,
}) as Component<"svg", IconProps>
