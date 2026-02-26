"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigLeft as OriginalArrowBigLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowBigLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowBigLeftIcon = component(Icon)({
  as: OriginalArrowBigLeftIcon,
}) as Component<"svg", IconProps>
