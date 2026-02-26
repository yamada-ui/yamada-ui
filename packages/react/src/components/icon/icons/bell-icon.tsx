"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bell as OriginalBellIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BellIcon = component(Icon)({ as: OriginalBellIcon }) as Component<
  "svg",
  IconProps
>
