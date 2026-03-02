"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RefreshCw as OriginalRefreshCwIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RefreshCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RefreshCwIcon = component(Icon)({
  as: OriginalRefreshCwIcon,
}) as Component<"svg", IconProps>
