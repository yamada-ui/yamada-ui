"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderUp as OriginalFolderUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderUpIcon = component(Icon)({
  as: OriginalFolderUpIcon,
}) as Component<"svg", IconProps>
