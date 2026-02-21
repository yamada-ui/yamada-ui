"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowLeftRight as OriginalArrowLeftRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowLeftRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowLeftRightIcon = component(Icon)({
  as: OriginalArrowLeftRightIcon,
}) as Component<"svg", IconProps>
