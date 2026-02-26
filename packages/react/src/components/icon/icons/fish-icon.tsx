"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Fish as OriginalFishIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FishIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FishIcon = component(Icon)({ as: OriginalFishIcon }) as Component<
  "svg",
  IconProps
>
