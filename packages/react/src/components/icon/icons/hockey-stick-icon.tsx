"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HockeyStick as OriginalHockeyStickIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HockeyStickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HockeyStickIcon = component(Icon)({
  as: OriginalHockeyStickIcon,
}) as Component<"svg", IconProps>
