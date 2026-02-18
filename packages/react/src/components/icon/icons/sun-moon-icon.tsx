"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SunMoon as OriginalSunMoonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SunMoonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SunMoonIcon = component(Icon)({
  as: OriginalSunMoonIcon,
}) as Component<"svg", IconProps>
