"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GlobeCheck as OriginalGlobeCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlobeCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlobeCheckIcon = component(Icon)({
  as: OriginalGlobeCheckIcon,
}) as Component<"svg", IconProps>
