"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderClock as OriginalFolderClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderClockIcon = component(Icon)({
  as: OriginalFolderClockIcon,
}) as Component<"svg", IconProps>
