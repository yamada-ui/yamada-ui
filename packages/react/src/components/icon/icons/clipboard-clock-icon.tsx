"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardClock as OriginalClipboardClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardClockIcon = component(Icon)({
  as: OriginalClipboardClockIcon,
}) as Component<"svg", IconProps>
