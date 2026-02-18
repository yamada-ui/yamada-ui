"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ALargeSmall as OriginalALargeSmallIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ALargeSmallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ALargeSmallIcon = component(Icon)({
  as: OriginalALargeSmallIcon,
}) as Component<"svg", IconProps>
