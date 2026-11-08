"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArchiveArrowDown as OriginalArchiveArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArchiveArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArchiveArrowDownIcon = component(Icon)({
  as: OriginalArchiveArrowDownIcon,
}) as Component<"svg", IconProps>
