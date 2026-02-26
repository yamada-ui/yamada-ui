"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownToDot as OriginalArrowDownToDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownToDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownToDotIcon = component(Icon)({
  as: OriginalArrowDownToDotIcon,
}) as Component<"svg", IconProps>
