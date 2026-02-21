"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileType as OriginalFileTypeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileTypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileTypeIcon = component(Icon)({
  as: OriginalFileTypeIcon,
}) as Component<"svg", IconProps>
