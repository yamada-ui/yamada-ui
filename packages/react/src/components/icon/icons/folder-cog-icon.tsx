"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderCog as OriginalFolderCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderCogIcon = component(Icon)({
  as: OriginalFolderCogIcon,
}) as Component<"svg", IconProps>
