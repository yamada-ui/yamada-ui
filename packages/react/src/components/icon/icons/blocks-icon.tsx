"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Blocks as OriginalBlocksIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BlocksIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BlocksIcon = component(Icon)({
  as: OriginalBlocksIcon,
}) as Component<"svg", IconProps>
