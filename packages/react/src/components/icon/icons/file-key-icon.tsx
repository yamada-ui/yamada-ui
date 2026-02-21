"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileKey as OriginalFileKeyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileKeyIcon = component(Icon)({
  as: OriginalFileKeyIcon,
}) as Component<"svg", IconProps>
