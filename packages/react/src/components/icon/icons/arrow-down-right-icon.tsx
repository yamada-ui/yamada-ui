"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownRight as OriginalArrowDownRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownRightIcon = component(Icon)({
  as: OriginalArrowDownRightIcon,
}) as Component<"svg", IconProps>
