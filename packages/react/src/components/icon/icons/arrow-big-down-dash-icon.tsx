"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigDownDash as OriginalArrowBigDownDashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowBigDownDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowBigDownDashIcon = component(Icon)({
  as: OriginalArrowBigDownDashIcon,
}) as Component<"svg", IconProps>
