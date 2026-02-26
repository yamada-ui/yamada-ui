"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderHeart as OriginalFolderHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderHeartIcon = component(Icon)({
  as: OriginalFolderHeartIcon,
}) as Component<"svg", IconProps>
