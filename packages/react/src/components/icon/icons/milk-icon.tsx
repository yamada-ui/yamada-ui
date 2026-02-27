"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Milk as OriginalMilkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MilkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MilkIcon = component(Icon)({ as: OriginalMilkIcon }) as Component<
  "svg",
  IconProps
>
