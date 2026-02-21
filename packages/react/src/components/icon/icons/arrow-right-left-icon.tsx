"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowRightLeft as OriginalArrowRightLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowRightLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowRightLeftIcon = component(Icon)({
  as: OriginalArrowRightLeftIcon,
}) as Component<"svg", IconProps>
