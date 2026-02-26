"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TvMinimal as OriginalTvMinimalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TvMinimalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TvMinimalIcon = component(Icon)({
  as: OriginalTvMinimalIcon,
}) as Component<"svg", IconProps>
