"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TvMinimalPlay as OriginalTvMinimalPlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TvMinimalPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TvMinimalPlayIcon = component(Icon)({
  as: OriginalTvMinimalPlayIcon,
}) as Component<"svg", IconProps>
