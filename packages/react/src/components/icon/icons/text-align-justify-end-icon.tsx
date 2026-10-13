"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextAlignJustifyEnd as OriginalTextAlignJustifyEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextAlignJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextAlignJustifyEndIcon = component(Icon)({
  as: OriginalTextAlignJustifyEndIcon,
}) as Component<"svg", IconProps>
