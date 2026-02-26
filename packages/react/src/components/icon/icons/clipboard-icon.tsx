"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clipboard as OriginalClipboardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardIcon = component(Icon)({
  as: OriginalClipboardIcon,
}) as Component<"svg", IconProps>
