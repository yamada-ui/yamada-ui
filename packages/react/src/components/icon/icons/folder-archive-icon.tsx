"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderArchive as OriginalFolderArchiveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderArchiveIcon = component(Icon)({
  as: OriginalFolderArchiveIcon,
}) as Component<"svg", IconProps>
