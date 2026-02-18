"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderSymlink as OriginalFolderSymlinkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderSymlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderSymlinkIcon = component(Icon)({
  as: OriginalFolderSymlinkIcon,
}) as Component<"svg", IconProps>
