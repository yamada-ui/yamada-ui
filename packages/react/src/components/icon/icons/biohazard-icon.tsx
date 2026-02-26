"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Biohazard as OriginalBiohazardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BiohazardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BiohazardIcon = component(Icon)({
  as: OriginalBiohazardIcon,
}) as Component<"svg", IconProps>
