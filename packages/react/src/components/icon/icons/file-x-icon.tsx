"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileX as OriginalFileXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileXIcon = component(Icon)({
  as: OriginalFileXIcon,
}) as Component<"svg", IconProps>
