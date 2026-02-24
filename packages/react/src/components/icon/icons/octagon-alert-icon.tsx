"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { OctagonAlert as OriginalOctagonAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OctagonAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OctagonAlertIcon = component(Icon)({
  as: OriginalOctagonAlertIcon,
}) as Component<"svg", IconProps>
