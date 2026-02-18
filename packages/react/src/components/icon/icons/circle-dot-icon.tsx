"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleDot as OriginalCircleDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleDotIcon = component(Icon)({
  as: OriginalCircleDotIcon,
}) as Component<"svg", IconProps>
