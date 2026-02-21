"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Baby as OriginalBabyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BabyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BabyIcon = component(Icon)({ as: OriginalBabyIcon }) as Component<
  "svg",
  IconProps
>
