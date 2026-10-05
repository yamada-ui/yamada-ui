"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Galaxy as OriginalGalaxyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GalaxyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GalaxyIcon = component(Icon)({
  as: OriginalGalaxyIcon,
}) as Component<"svg", IconProps>
