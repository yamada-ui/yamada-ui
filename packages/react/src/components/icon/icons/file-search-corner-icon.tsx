"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileSearchCorner as OriginalFileSearchCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileSearchCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileSearchCornerIcon = component(Icon)({
  as: OriginalFileSearchCornerIcon,
}) as Component<"svg", IconProps>
