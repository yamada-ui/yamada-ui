"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SatelliteDish as OriginalSatelliteDishIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SatelliteDishIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SatelliteDishIcon = component(Icon)({
  as: OriginalSatelliteDishIcon,
}) as Component<"svg", IconProps>
