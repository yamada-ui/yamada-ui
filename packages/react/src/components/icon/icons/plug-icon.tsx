"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Plug as OriginalPlugIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlugIcon = component(Icon)({ as: OriginalPlugIcon }) as Component<
  "svg",
  IconProps
>
