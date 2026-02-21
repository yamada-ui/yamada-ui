"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tv as OriginalTvIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TvIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TvIcon = component(Icon)({ as: OriginalTvIcon }) as Component<
  "svg",
  IconProps
>
