"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Summary as OriginalSummaryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SummaryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SummaryIcon = component(Icon)({
  as: OriginalSummaryIcon,
}) as Component<"svg", IconProps>
