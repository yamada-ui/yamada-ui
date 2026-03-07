"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArchiveX as OriginalArchiveXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArchiveXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArchiveXIcon = component(Icon)({
  as: OriginalArchiveXIcon,
}) as Component<"svg", IconProps>
