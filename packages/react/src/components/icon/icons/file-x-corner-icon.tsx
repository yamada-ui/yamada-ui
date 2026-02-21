"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileXCorner as OriginalFileXCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileXCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileXCornerIcon = component(Icon)({
  as: OriginalFileXCornerIcon,
}) as Component<"svg", IconProps>
