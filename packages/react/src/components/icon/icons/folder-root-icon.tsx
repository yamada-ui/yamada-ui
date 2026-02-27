"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderRoot as OriginalFolderRootIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderRootIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderRootIcon = component(Icon)({
  as: OriginalFolderRootIcon,
}) as Component<"svg", IconProps>
