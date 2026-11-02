"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tombstone as OriginalTombstoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TombstoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TombstoneIcon = component(Icon)({
  as: OriginalTombstoneIcon,
}) as Component<"svg", IconProps>
