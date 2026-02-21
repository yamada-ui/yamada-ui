"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigRight as OriginalArrowBigRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowBigRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowBigRightIcon = component(Icon)({
  as: OriginalArrowBigRightIcon,
}) as Component<"svg", IconProps>
