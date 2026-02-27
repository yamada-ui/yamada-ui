"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardPen as OriginalClipboardPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardPenIcon = component(Icon)({
  as: OriginalClipboardPenIcon,
}) as Component<"svg", IconProps>
