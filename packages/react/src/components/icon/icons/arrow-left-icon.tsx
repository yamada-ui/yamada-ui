"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowLeft as OriginalArrowLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowLeftIcon = component(Icon)({
  as: OriginalArrowLeftIcon,
}) as Component<"svg", IconProps>
