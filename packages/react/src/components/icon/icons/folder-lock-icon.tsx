"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderLock as OriginalFolderLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderLockIcon = component(Icon)({
  as: OriginalFolderLockIcon,
}) as Component<"svg", IconProps>
