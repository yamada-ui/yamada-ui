"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileBracesCorner as OriginalFileBracesCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileBracesCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileBracesCornerIcon = component(Icon)({
  as: OriginalFileBracesCornerIcon,
}) as Component<"svg", IconProps>
