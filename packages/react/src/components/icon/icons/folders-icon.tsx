"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Folders as OriginalFoldersIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FoldersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FoldersIcon = component(Icon)({
  as: OriginalFoldersIcon,
}) as Component<"svg", IconProps>
