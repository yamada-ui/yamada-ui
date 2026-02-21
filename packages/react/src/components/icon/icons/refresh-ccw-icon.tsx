"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RefreshCcw as OriginalRefreshCcwIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RefreshCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RefreshCcwIcon = component(Icon)({
  as: OriginalRefreshCcwIcon,
}) as Component<"svg", IconProps>
