"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderX as OriginalFolderXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderXIcon = component(Icon)({
  as: OriginalFolderXIcon,
}) as Component<"svg", IconProps>
