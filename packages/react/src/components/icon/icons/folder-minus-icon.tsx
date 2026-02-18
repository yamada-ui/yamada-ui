"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderMinus as OriginalFolderMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderMinusIcon = component(Icon)({
  as: OriginalFolderMinusIcon,
}) as Component<"svg", IconProps>
