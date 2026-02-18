"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDown01 as OriginalArrowDown01Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDown01Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDown01Icon = component(Icon)({
  as: OriginalArrowDown01Icon,
}) as Component<"svg", IconProps>
