"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderGit as OriginalFolderGitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderGitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderGitIcon = component(Icon)({
  as: OriginalFolderGitIcon,
}) as Component<"svg", IconProps>
