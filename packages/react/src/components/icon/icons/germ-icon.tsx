"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Germ as OriginalGermIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GermIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GermIcon = component(Icon)({ as: OriginalGermIcon }) as Component<
  "svg",
  IconProps
>
