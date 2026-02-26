"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCcwKey as OriginalRotateCcwKeyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RotateCcwKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RotateCcwKeyIcon = component(Icon)({
  as: OriginalRotateCcwKeyIcon,
}) as Component<"svg", IconProps>
