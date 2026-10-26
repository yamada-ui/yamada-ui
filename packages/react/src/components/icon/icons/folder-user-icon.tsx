"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderUser as OriginalFolderUserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderUserIcon = component(Icon)({
  as: OriginalFolderUserIcon,
}) as Component<"svg", IconProps>
