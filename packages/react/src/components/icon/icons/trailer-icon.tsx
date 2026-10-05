"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Trailer as OriginalTrailerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrailerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrailerIcon = component(Icon)({
  as: OriginalTrailerIcon,
}) as Component<"svg", IconProps>
