"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPlus as OriginalMapPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPlusIcon = component(Icon)({
  as: OriginalMapPlusIcon,
}) as Component<"svg", IconProps>
