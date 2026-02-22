"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pipette as OriginalPipetteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PipetteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PipetteIcon = component(Icon)({
  as: OriginalPipetteIcon,
}) as Component<"svg", IconProps>
