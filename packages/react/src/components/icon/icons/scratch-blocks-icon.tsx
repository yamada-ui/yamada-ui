"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScratchBlocks as OriginalScratchBlocksIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScratchBlocksIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScratchBlocksIcon = component(Icon)({
  as: OriginalScratchBlocksIcon,
}) as Component<"svg", IconProps>
