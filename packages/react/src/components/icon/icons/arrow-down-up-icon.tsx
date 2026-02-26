"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownUp as OriginalArrowDownUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownUpIcon = component(Icon)({
  as: OriginalArrowDownUpIcon,
}) as Component<"svg", IconProps>
