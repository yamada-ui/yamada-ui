"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderSync as OriginalFolderSyncIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderSyncIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderSyncIcon = component(Icon)({
  as: OriginalFolderSyncIcon,
}) as Component<"svg", IconProps>
