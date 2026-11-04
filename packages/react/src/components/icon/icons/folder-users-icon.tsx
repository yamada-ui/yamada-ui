"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderUsers as OriginalFolderUsersIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderUsersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderUsersIcon = component(Icon)({
  as: OriginalFolderUsersIcon,
}) as Component<"svg", IconProps>
