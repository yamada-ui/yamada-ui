"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardList as OriginalClipboardListIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardListIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardListIcon = component(Icon)({
  as: OriginalClipboardListIcon,
}) as Component<"svg", IconProps>
