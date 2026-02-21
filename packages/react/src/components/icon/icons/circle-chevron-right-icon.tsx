"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronRight as OriginalCircleChevronRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleChevronRightIcon = component(Icon)({
  as: OriginalCircleChevronRightIcon,
}) as Component<"svg", IconProps>
