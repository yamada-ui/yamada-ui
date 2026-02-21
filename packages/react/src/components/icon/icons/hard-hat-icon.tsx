"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HardHat as OriginalHardHatIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HardHatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HardHatIcon = component(Icon)({
  as: OriginalHardHatIcon,
}) as Component<"svg", IconProps>
