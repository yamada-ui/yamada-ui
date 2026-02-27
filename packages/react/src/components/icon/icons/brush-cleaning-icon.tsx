"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BrushCleaning as OriginalBrushCleaningIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrushCleaningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrushCleaningIcon = component(Icon)({
  as: OriginalBrushCleaningIcon,
}) as Component<"svg", IconProps>
