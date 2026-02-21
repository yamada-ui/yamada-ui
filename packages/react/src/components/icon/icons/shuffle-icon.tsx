"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shuffle as OriginalShuffleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShuffleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShuffleIcon = component(Icon)({
  as: OriginalShuffleIcon,
}) as Component<"svg", IconProps>
