"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sunrise as OriginalSunriseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SunriseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SunriseIcon = component(Icon)({
  as: OriginalSunriseIcon,
}) as Component<"svg", IconProps>
