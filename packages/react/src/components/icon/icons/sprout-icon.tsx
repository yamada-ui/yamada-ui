"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sprout as OriginalSproutIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SproutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SproutIcon = component(Icon)({
  as: OriginalSproutIcon,
}) as Component<"svg", IconProps>
