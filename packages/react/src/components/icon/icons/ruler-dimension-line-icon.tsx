"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RulerDimensionLine as OriginalRulerDimensionLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RulerDimensionLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RulerDimensionLineIcon = component(Icon)({
  as: OriginalRulerDimensionLineIcon,
}) as Component<"svg", IconProps>
