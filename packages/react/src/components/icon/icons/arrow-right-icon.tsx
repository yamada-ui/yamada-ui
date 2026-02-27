"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowRight as OriginalArrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowRightIcon = component(Icon)({
  as: OriginalArrowRightIcon,
}) as Component<"svg", IconProps>
