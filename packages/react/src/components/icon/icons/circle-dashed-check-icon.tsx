"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleDashedCheck as OriginalCircleDashedCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleDashedCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleDashedCheckIcon = component(Icon)({
  as: OriginalCircleDashedCheckIcon,
}) as Component<"svg", IconProps>
