"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownLeft as OriginalArrowDownLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownLeftIcon = component(Icon)({
  as: OriginalArrowDownLeftIcon,
}) as Component<"svg", IconProps>
