"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleAlert as OriginalCircleAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleAlertIcon = component(Icon)({
  as: OriginalCircleAlertIcon,
}) as Component<"svg", IconProps>
