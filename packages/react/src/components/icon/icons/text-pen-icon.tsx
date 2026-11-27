"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextPen as OriginalTextPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextPenIcon = component(Icon)({
  as: OriginalTextPenIcon,
}) as Component<"svg", IconProps>
