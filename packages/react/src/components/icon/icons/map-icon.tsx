"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Map as OriginalMapIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapIcon = component(Icon)({ as: OriginalMapIcon }) as Component<
  "svg",
  IconProps
>
