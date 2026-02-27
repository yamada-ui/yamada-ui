"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronLeft as OriginalChevronLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronLeftIcon = component(Icon)({
  as: OriginalChevronLeftIcon,
}) as Component<"svg", IconProps>
