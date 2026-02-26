"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FishOff as OriginalFishOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FishOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FishOffIcon = component(Icon)({
  as: OriginalFishOffIcon,
}) as Component<"svg", IconProps>
