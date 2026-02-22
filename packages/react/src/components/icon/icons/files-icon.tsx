"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Files as OriginalFilesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FilesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FilesIcon = component(Icon)({
  as: OriginalFilesIcon,
}) as Component<"svg", IconProps>
