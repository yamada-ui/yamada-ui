"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronLeft as OriginalCircleChevronLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleChevronLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleChevronLeftIcon = component(Icon)({
  as: OriginalCircleChevronLeftIcon,
}) as Component<"svg", IconProps>
