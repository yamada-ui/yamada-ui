"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Road as OriginalRoadIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RoadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RoadIcon = component(Icon)({ as: OriginalRoadIcon }) as Component<
  "svg",
  IconProps
>
