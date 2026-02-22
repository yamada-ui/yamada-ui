"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileSymlink as OriginalFileSymlinkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileSymlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileSymlinkIcon = component(Icon)({
  as: OriginalFileSymlinkIcon,
}) as Component<"svg", IconProps>
