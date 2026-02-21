"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileOutput as OriginalFileOutputIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileOutputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileOutputIcon = component(Icon)({
  as: OriginalFileOutputIcon,
}) as Component<"svg", IconProps>
