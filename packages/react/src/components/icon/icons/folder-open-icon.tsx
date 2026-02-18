"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderOpen as OriginalFolderOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderOpenIcon = component(Icon)({
  as: OriginalFolderOpenIcon,
}) as Component<"svg", IconProps>
