"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileBox as OriginalFileBoxIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileBoxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileBoxIcon = component(Icon)({
  as: OriginalFileBoxIcon,
}) as Component<"svg", IconProps>
