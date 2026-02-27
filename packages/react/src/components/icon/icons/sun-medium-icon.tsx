"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SunMedium as OriginalSunMediumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SunMediumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SunMediumIcon = component(Icon)({
  as: OriginalSunMediumIcon,
}) as Component<"svg", IconProps>
