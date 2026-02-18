"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownToLine as OriginalArrowDownToLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownToLineIcon = component(Icon)({
  as: OriginalArrowDownToLineIcon,
}) as Component<"svg", IconProps>
