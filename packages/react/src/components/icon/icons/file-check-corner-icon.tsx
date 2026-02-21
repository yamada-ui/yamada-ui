"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileCheckCorner as OriginalFileCheckCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileCheckCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileCheckCornerIcon = component(Icon)({
  as: OriginalFileCheckCornerIcon,
}) as Component<"svg", IconProps>
