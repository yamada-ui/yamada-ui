"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileMinusCorner as OriginalFileMinusCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileMinusCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileMinusCornerIcon = component(Icon)({
  as: OriginalFileMinusCornerIcon,
}) as Component<"svg", IconProps>
