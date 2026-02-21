"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleDashed as OriginalCircleDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleDashedIcon = component(Icon)({
  as: OriginalCircleDashedIcon,
}) as Component<"svg", IconProps>
