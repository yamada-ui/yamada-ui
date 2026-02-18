"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudMoon as OriginalCloudMoonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudMoonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudMoonIcon = component(Icon)({
  as: OriginalCloudMoonIcon,
}) as Component<"svg", IconProps>
