"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Split as OriginalSplitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SplitIcon = component(Icon)({
  as: OriginalSplitIcon,
}) as Component<"svg", IconProps>
