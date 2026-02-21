"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HousePlus as OriginalHousePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HousePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HousePlusIcon = component(Icon)({
  as: OriginalHousePlusIcon,
}) as Component<"svg", IconProps>
