"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SearchAlert as OriginalSearchAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SearchAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SearchAlertIcon = component(Icon)({
  as: OriginalSearchAlertIcon,
}) as Component<"svg", IconProps>
