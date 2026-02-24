"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderSearch2 as OriginalFolderSearch2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderSearch2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderSearch2Icon = component(Icon)({
  as: OriginalFolderSearch2Icon,
}) as Component<"svg", IconProps>
