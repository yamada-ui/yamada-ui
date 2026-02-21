"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Euro as OriginalEuroIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EuroIcon = component(Icon)({ as: OriginalEuroIcon }) as Component<
  "svg",
  IconProps
>
