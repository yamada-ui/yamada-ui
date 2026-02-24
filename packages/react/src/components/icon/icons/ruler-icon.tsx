"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ruler as OriginalRulerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RulerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RulerIcon = component(Icon)({
  as: OriginalRulerIcon,
}) as Component<"svg", IconProps>
