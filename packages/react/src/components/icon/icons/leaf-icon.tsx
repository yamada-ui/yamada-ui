"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Leaf as OriginalLeafIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LeafIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LeafIcon = component(Icon)({ as: OriginalLeafIcon }) as Component<
  "svg",
  IconProps
>
