"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleEqual as OriginalCircleEqualIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleEqualIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleEqualIcon = component(Icon)({
  as: OriginalCircleEqualIcon,
}) as Component<"svg", IconProps>
