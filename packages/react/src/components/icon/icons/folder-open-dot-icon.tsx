"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderOpenDot as OriginalFolderOpenDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderOpenDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderOpenDotIcon = component(Icon)({
  as: OriginalFolderOpenDotIcon,
}) as Component<"svg", IconProps>
