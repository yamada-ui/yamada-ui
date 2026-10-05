"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HouseCog as OriginalHouseCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HouseCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HouseCogIcon = component(Icon)({
  as: OriginalHouseCogIcon,
}) as Component<"svg", IconProps>
