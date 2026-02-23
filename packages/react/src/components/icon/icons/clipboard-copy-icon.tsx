"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardCopy as OriginalClipboardCopyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardCopyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardCopyIcon = component(Icon)({
  as: OriginalClipboardCopyIcon,
}) as Component<"svg", IconProps>
