"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderCode as OriginalFolderCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderCodeIcon = component(Icon)({
  as: OriginalFolderCodeIcon,
}) as Component<"svg", IconProps>
