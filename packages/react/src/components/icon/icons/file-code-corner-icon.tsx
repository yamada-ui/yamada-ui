"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileCodeCorner as OriginalFileCodeCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileCodeCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileCodeCornerIcon = component(Icon)({
  as: OriginalFileCodeCornerIcon,
}) as Component<"svg", IconProps>
