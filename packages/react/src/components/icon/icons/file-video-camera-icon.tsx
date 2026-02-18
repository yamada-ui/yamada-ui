"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileVideoCamera as OriginalFileVideoCameraIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileVideoCameraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileVideoCameraIcon = component(Icon)({
  as: OriginalFileVideoCameraIcon,
}) as Component<"svg", IconProps>
