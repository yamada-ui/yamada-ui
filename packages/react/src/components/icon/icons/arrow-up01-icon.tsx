"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUp01 as OriginalArrowUp01Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUp01Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUp01Icon = component(Icon)({
  as: OriginalArrowUp01Icon,
}) as Component<"svg", IconProps>
