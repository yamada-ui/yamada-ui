"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Gavel as OriginalGavelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GavelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GavelIcon = component(Icon)({
  as: OriginalGavelIcon,
}) as Component<"svg", IconProps>
