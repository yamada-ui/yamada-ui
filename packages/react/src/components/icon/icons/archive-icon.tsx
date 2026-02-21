"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Archive as OriginalArchiveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArchiveIcon = component(Icon)({
  as: OriginalArchiveIcon,
}) as Component<"svg", IconProps>
