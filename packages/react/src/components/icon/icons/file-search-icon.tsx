"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileSearch as OriginalFileSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileSearchIcon = component(Icon)({
  as: OriginalFileSearchIcon,
}) as Component<"svg", IconProps>
