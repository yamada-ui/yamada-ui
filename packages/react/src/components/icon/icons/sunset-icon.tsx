"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sunset as OriginalSunsetIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SunsetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SunsetIcon = component(Icon)({
  as: OriginalSunsetIcon,
}) as Component<"svg", IconProps>
