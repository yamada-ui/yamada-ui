"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowRightToLine as OriginalArrowRightToLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowRightToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowRightToLineIcon = component(Icon)({
  as: OriginalArrowRightToLineIcon,
}) as Component<"svg", IconProps>
