"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileBraces as OriginalFileBracesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileBracesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileBracesIcon = component(Icon)({
  as: OriginalFileBracesIcon,
}) as Component<"svg", IconProps>
