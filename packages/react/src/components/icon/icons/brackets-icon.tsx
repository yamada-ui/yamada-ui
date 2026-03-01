"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Brackets as OriginalBracketsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BracketsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BracketsIcon = component(Icon)({
  as: OriginalBracketsIcon,
}) as Component<"svg", IconProps>
