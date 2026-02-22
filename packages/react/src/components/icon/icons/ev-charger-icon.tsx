"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EvCharger as OriginalEvChargerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EvChargerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EvChargerIcon = component(Icon)({
  as: OriginalEvChargerIcon,
}) as Component<"svg", IconProps>
