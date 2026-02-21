"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardX as OriginalClipboardXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardXIcon = component(Icon)({
  as: OriginalClipboardXIcon,
}) as Component<"svg", IconProps>
