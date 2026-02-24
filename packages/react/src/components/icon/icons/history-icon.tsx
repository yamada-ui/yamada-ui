"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { History as OriginalHistoryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HistoryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HistoryIcon = component(Icon)({
  as: OriginalHistoryIcon,
}) as Component<"svg", IconProps>
