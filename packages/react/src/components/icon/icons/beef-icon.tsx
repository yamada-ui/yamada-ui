"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Beef as OriginalBeefIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BeefIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BeefIcon = component(Icon)({ as: OriginalBeefIcon }) as Component<
  "svg",
  IconProps
>
