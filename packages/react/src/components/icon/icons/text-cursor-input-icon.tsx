"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextCursorInput as OriginalTextCursorInputIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextCursorInputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextCursorInputIcon = component(Icon)({
  as: OriginalTextCursorInputIcon,
}) as Component<"svg", IconProps>
