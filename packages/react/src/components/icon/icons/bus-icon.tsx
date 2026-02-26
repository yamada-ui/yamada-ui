"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bus as OriginalBusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BusIcon = component(Icon)({ as: OriginalBusIcon }) as Component<
  "svg",
  IconProps
>
