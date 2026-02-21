"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileBadge as OriginalFileBadgeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileBadgeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileBadgeIcon = component(Icon)({
  as: OriginalFileBadgeIcon,
}) as Component<"svg", IconProps>
