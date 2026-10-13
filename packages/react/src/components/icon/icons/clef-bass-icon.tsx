"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClefBass as OriginalClefBassIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClefBassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClefBassIcon = component(Icon)({
  as: OriginalClefBassIcon,
}) as Component<"svg", IconProps>
