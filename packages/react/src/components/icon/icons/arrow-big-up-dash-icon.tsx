"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigUpDash as OriginalArrowBigUpDashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowBigUpDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowBigUpDashIcon = component(Icon)({
  as: OriginalArrowBigUpDashIcon,
}) as Component<"svg", IconProps>
