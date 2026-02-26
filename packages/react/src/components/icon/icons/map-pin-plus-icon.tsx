"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinPlus as OriginalMapPinPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinPlusIcon = component(Icon)({
  as: OriginalMapPinPlusIcon,
}) as Component<"svg", IconProps>
