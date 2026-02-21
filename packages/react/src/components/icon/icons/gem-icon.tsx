"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Gem as OriginalGemIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GemIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GemIcon = component(Icon)({ as: OriginalGemIcon }) as Component<
  "svg",
  IconProps
>
