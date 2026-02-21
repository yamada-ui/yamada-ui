"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardPenLine as OriginalClipboardPenLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardPenLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardPenLineIcon = component(Icon)({
  as: OriginalClipboardPenLineIcon,
}) as Component<"svg", IconProps>
