"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderGit2 as OriginalFolderGit2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderGit2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderGit2Icon = component(Icon)({
  as: OriginalFolderGit2Icon,
}) as Component<"svg", IconProps>
