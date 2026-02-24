"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderClosed as OriginalFolderClosedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderClosedIcon = component(Icon)({
  as: OriginalFolderClosedIcon,
}) as Component<"svg", IconProps>
