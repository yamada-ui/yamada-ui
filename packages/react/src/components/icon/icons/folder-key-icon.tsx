"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderKey as OriginalFolderKeyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderKeyIcon = component(Icon)({
  as: OriginalFolderKeyIcon,
}) as Component<"svg", IconProps>
