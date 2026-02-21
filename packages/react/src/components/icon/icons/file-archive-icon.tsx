"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileArchive as OriginalFileArchiveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileArchiveIcon = component(Icon)({
  as: OriginalFileArchiveIcon,
}) as Component<"svg", IconProps>
