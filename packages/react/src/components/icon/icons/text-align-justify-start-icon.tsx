"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextAlignJustifyStart as OriginalTextAlignJustifyStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextAlignJustifyStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextAlignJustifyStartIcon = component(Icon)({
  as: OriginalTextAlignJustifyStartIcon,
}) as Component<"svg", IconProps>
