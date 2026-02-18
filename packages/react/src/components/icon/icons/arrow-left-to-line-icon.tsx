"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowLeftToLine as OriginalArrowLeftToLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowLeftToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowLeftToLineIcon = component(Icon)({
  as: OriginalArrowLeftToLineIcon,
}) as Component<"svg", IconProps>
