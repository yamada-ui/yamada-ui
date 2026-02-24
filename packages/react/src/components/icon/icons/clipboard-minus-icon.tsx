"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardMinus as OriginalClipboardMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardMinusIcon = component(Icon)({
  as: OriginalClipboardMinusIcon,
}) as Component<"svg", IconProps>
