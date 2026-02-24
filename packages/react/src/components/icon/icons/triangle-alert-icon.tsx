"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TriangleAlert as OriginalTriangleAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TriangleAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TriangleAlertIcon = component(Icon)({
  as: OriginalTriangleAlertIcon,
}) as Component<"svg", IconProps>
