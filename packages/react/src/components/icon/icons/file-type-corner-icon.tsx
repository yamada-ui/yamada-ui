"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileTypeCorner as OriginalFileTypeCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileTypeCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileTypeCornerIcon = component(Icon)({
  as: OriginalFileTypeCornerIcon,
}) as Component<"svg", IconProps>
