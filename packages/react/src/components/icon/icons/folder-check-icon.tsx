"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderCheck as OriginalFolderCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderCheckIcon = component(Icon)({
  as: OriginalFolderCheckIcon,
}) as Component<"svg", IconProps>
