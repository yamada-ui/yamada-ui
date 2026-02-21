"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Landmark as OriginalLandmarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LandmarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LandmarkIcon = component(Icon)({
  as: OriginalLandmarkIcon,
}) as Component<"svg", IconProps>
