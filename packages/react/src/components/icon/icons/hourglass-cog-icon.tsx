"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HourglassCog as OriginalHourglassCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HourglassCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HourglassCogIcon = component(Icon)({
  as: OriginalHourglassCogIcon,
}) as Component<"svg", IconProps>
