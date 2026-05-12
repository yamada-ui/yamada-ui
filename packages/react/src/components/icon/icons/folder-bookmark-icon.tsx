"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderBookmark as OriginalFolderBookmarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderBookmarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderBookmarkIcon = component(Icon)({
  as: OriginalFolderBookmarkIcon,
}) as Component<"svg", IconProps>
