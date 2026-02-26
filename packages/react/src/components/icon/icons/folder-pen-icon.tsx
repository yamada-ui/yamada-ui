"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderPen as OriginalFolderPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderPenIcon = component(Icon)({
  as: OriginalFolderPenIcon,
}) as Component<"svg", IconProps>
