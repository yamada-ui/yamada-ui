"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderDown as OriginalFolderDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderDownIcon = component(Icon)({
  as: OriginalFolderDownIcon,
}) as Component<"svg", IconProps>
