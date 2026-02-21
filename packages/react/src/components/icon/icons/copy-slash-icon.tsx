"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CopySlash as OriginalCopySlashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CopySlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CopySlashIcon = component(Icon)({
  as: OriginalCopySlashIcon,
}) as Component<"svg", IconProps>
