"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Egg as OriginalEggIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EggIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EggIcon = component(Icon)({ as: OriginalEggIcon }) as Component<
  "svg",
  IconProps
>
