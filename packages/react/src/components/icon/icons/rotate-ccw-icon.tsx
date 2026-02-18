"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCcw as OriginalRotateCcwIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RotateCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RotateCcwIcon = component(Icon)({
  as: OriginalRotateCcwIcon,
}) as Component<"svg", IconProps>
