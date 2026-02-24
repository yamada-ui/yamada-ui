"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudAlert as OriginalCloudAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudAlertIcon = component(Icon)({
  as: OriginalCloudAlertIcon,
}) as Component<"svg", IconProps>
