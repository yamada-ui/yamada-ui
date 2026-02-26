"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RefreshCcwDot as OriginalRefreshCcwDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RefreshCcwDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RefreshCcwDotIcon = component(Icon)({
  as: OriginalRefreshCcwDotIcon,
}) as Component<"svg", IconProps>
