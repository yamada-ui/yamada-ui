"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextCursor as OriginalTextCursorIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextCursorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextCursorIcon = component(Icon)({
  as: OriginalTextCursorIcon,
}) as Component<"svg", IconProps>
