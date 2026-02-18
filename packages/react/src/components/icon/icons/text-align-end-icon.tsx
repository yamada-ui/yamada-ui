"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextAlignEnd as OriginalTextAlignEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextAlignEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextAlignEndIcon = component(Icon)({
  as: OriginalTextAlignEndIcon,
}) as Component<"svg", IconProps>
