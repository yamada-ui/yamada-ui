"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rat as OriginalRatIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RatIcon = component(Icon)({ as: OriginalRatIcon }) as Component<
  "svg",
  IconProps
>
