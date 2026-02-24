"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleFadingArrowUp as OriginalCircleFadingArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleFadingArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleFadingArrowUpIcon = component(Icon)({
  as: OriginalCircleFadingArrowUpIcon,
}) as Component<"svg", IconProps>
