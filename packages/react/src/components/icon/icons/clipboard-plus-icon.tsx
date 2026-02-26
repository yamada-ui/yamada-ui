"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardPlus as OriginalClipboardPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardPlusIcon = component(Icon)({
  as: OriginalClipboardPlusIcon,
}) as Component<"svg", IconProps>
