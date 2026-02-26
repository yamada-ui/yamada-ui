"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FilePlusCorner as OriginalFilePlusCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FilePlusCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FilePlusCornerIcon = component(Icon)({
  as: OriginalFilePlusCornerIcon,
}) as Component<"svg", IconProps>
