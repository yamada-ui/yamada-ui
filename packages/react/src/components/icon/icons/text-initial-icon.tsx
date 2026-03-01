"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextInitial as OriginalTextInitialIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextInitialIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextInitialIcon = component(Icon)({
  as: OriginalTextInitialIcon,
}) as Component<"svg", IconProps>
