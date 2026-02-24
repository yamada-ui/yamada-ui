"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bandage as OriginalBandageIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BandageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BandageIcon = component(Icon)({
  as: OriginalBandageIcon,
}) as Component<"svg", IconProps>
