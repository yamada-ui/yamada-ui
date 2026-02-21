"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextAlignJustify as OriginalTextAlignJustifyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextAlignJustifyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextAlignJustifyIcon = component(Icon)({
  as: OriginalTextAlignJustifyIcon,
}) as Component<"svg", IconProps>
