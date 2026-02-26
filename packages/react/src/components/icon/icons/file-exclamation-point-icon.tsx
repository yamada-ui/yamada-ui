"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileExclamationPoint as OriginalFileExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileExclamationPointIcon = component(Icon)({
  as: OriginalFileExclamationPointIcon,
}) as Component<"svg", IconProps>
