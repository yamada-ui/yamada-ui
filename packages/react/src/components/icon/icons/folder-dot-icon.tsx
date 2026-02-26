"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderDot as OriginalFolderDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderDotIcon = component(Icon)({
  as: OriginalFolderDotIcon,
}) as Component<"svg", IconProps>
