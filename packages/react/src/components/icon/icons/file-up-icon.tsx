"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileUp as OriginalFileUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileUpIcon = component(Icon)({
  as: OriginalFileUpIcon,
}) as Component<"svg", IconProps>
