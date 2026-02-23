"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderSearch as OriginalFolderSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderSearchIcon = component(Icon)({
  as: OriginalFolderSearchIcon,
}) as Component<"svg", IconProps>
