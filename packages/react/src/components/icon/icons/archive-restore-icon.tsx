"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArchiveRestore as OriginalArchiveRestoreIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArchiveRestoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArchiveRestoreIcon = component(Icon)({
  as: OriginalArchiveRestoreIcon,
}) as Component<"svg", IconProps>
