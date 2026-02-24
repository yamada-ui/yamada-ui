"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinned as OriginalMapPinnedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinnedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinnedIcon = component(Icon)({
  as: OriginalMapPinnedIcon,
}) as Component<"svg", IconProps>
