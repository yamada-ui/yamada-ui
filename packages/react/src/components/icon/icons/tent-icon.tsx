"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tent as OriginalTentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TentIcon = component(Icon)({ as: OriginalTentIcon }) as Component<
  "svg",
  IconProps
>
