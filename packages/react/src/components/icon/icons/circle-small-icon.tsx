"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleSmall as OriginalCircleSmallIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleSmallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleSmallIcon = component(Icon)({
  as: OriginalCircleSmallIcon,
}) as Component<"svg", IconProps>
