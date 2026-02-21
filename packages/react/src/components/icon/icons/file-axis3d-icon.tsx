"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileAxis3d as OriginalFileAxis3dIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileAxis3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileAxis3dIcon = component(Icon)({
  as: OriginalFileAxis3dIcon,
}) as Component<"svg", IconProps>
