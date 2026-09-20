"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dome as OriginalDomeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DomeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DomeIcon = component(Icon)({ as: OriginalDomeIcon }) as Component<
  "svg",
  IconProps
>
