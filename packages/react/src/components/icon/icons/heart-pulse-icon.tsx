"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HeartPulse as OriginalHeartPulseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeartPulseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeartPulseIcon = component(Icon)({
  as: OriginalHeartPulseIcon,
}) as Component<"svg", IconProps>
