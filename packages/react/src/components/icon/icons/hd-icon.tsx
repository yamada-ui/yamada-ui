"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hd as OriginalHdIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HdIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HdIcon = component(Icon)({ as: OriginalHdIcon }) as Component<
  "svg",
  IconProps
>
