"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Disc as OriginalDiscIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiscIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiscIcon = component(Icon)({ as: OriginalDiscIcon }) as Component<
  "svg",
  IconProps
>
