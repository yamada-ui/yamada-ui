"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderInput as OriginalFolderInputIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderInputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderInputIcon = component(Icon)({
  as: OriginalFolderInputIcon,
}) as Component<"svg", IconProps>
