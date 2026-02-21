"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardPaste as OriginalClipboardPasteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardPasteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardPasteIcon = component(Icon)({
  as: OriginalClipboardPasteIcon,
}) as Component<"svg", IconProps>
