"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bird as OriginalBirdIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BirdIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BirdIcon = component(Icon)({ as: OriginalBirdIcon }) as Component<
  "svg",
  IconProps
>
