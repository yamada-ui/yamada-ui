"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileText as OriginalFileTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileTextIcon = component(Icon)({
  as: OriginalFileTextIcon,
}) as Component<"svg", IconProps>
