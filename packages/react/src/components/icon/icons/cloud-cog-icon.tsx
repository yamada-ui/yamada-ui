"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudCog as OriginalCloudCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudCogIcon = component(Icon)({
  as: OriginalCloudCogIcon,
}) as Component<"svg", IconProps>
