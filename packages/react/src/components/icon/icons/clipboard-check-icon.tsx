"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardCheck as OriginalClipboardCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClipboardCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClipboardCheckIcon = component(Icon)({
  as: OriginalClipboardCheckIcon,
}) as Component<"svg", IconProps>
