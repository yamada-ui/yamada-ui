"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Park as OriginalParkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ParkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ParkIcon = component(Icon)({ as: OriginalParkIcon }) as Component<
  "svg",
  IconProps
>
