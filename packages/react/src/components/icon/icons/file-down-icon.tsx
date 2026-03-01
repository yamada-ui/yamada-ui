"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileDown as OriginalFileDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileDownIcon = component(Icon)({
  as: OriginalFileDownIcon,
}) as Component<"svg", IconProps>
