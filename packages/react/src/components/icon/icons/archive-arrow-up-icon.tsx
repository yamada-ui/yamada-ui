"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArchiveArrowUp as OriginalArchiveArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArchiveArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArchiveArrowUpIcon = component(Icon)({
  as: OriginalArchiveArrowUpIcon,
}) as Component<"svg", IconProps>
