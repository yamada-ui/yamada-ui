"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rose as OriginalRoseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RoseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RoseIcon = component(Icon)({ as: OriginalRoseIcon }) as Component<
  "svg",
  IconProps
>
