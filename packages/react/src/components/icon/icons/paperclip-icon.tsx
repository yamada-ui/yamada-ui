"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Paperclip as OriginalPaperclipIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PaperclipIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PaperclipIcon = component(Icon)({
  as: OriginalPaperclipIcon,
}) as Component<"svg", IconProps>
