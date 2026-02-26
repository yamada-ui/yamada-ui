"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Folder as OriginalFolderIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderIcon = component(Icon)({
  as: OriginalFolderIcon,
}) as Component<"svg", IconProps>
