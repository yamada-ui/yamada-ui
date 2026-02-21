"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Fan as OriginalFanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FanIcon = component(Icon)({ as: OriginalFanIcon }) as Component<
  "svg",
  IconProps
>
