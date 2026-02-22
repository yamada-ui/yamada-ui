"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudDrizzle as OriginalCloudDrizzleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudDrizzleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudDrizzleIcon = component(Icon)({
  as: OriginalCloudDrizzleIcon,
}) as Component<"svg", IconProps>
