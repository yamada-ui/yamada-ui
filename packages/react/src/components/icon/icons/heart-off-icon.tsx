"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HeartOff as OriginalHeartOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeartOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeartOffIcon = component(Icon)({
  as: OriginalHeartOffIcon,
}) as Component<"svg", IconProps>
