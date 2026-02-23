"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudOff as OriginalCloudOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudOffIcon = component(Icon)({
  as: OriginalCloudOffIcon,
}) as Component<"svg", IconProps>
