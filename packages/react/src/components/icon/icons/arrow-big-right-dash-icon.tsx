"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigRightDash as OriginalArrowBigRightDashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowBigRightDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowBigRightDashIcon = component(Icon)({
  as: OriginalArrowBigRightDashIcon,
}) as Component<"svg", IconProps>
