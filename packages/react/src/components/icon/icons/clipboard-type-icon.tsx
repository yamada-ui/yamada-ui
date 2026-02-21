"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardType as OriginalClipboardTypeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardTypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardTypeIcon = component(Icon)({
  as: OriginalClipboardTypeIcon,
}) as Component<"svg", IconProps>
