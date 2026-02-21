"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowUp as OriginalCircleArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowUpIcon = component(Icon)({
  as: OriginalCircleArrowUpIcon,
}) as Component<"svg", IconProps>
