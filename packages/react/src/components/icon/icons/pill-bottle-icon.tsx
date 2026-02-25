"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PillBottle as OriginalPillBottleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PillBottleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PillBottleIcon = component(Icon)({
  as: OriginalPillBottleIcon,
}) as Component<"svg", IconProps>
