"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Spotlight as OriginalSpotlightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SpotlightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SpotlightIcon = component(Icon)({
  as: OriginalSpotlightIcon,
}) as Component<"svg", IconProps>
