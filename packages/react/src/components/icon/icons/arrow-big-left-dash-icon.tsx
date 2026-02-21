"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigLeftDash as OriginalArrowBigLeftDashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowBigLeftDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowBigLeftDashIcon = component(Icon)({
  as: OriginalArrowBigLeftDashIcon,
}) as Component<"svg", IconProps>
