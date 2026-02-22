"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CannabisOff as OriginalCannabisOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CannabisOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CannabisOffIcon = component(Icon)({
  as: OriginalCannabisOffIcon,
}) as Component<"svg", IconProps>
